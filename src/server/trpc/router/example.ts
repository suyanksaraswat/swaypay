import { t } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTicketShape } from "../../../utils/validate";

export const exampleRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),

  fetchTickets: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.ticket.findMany();
  }),

  fetchTicketById: t.procedure
    .input(
      z.object({
        id: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const ticket = await ctx.prisma.ticket.findFirst({
        where: {
          ticketNumber: parseInt(input.id),
        },
      });

      if (ticket) {
        return ticket;
      } else {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Ticket does not exist.",
        });
      }
    }),

  createTicket: t.procedure
    .input(createTicketShape)
    .mutation(async ({ ctx, input }) => {
      const count = await ctx.prisma.ticket.count();

      return await ctx.prisma.ticket.create({
        data: {
          name: input.name,
          description: input.description,
          status: "open",
          ticketNumber: count + 1,
        },
      });
    }),

  updateTicketStatus: t.procedure
    .input(
      z.object({
        id: z.string().min(1),
        status: z.enum(["open", "inProgress", "codeReview"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const stautsArr = ["open", "inProgress", "codeReview"];

      const ticket = await ctx.prisma.ticket.findFirst({
        where: {
          ticketNumber: parseInt(input.id),
        },
      });

      if (ticket) {
        const inputStatusIdx = stautsArr?.findIndex((s) => s === input.status);
        const existingStatusIdx = stautsArr?.findIndex(
          (s) => s === ticket.status,
        );

        if (Math.abs(existingStatusIdx - inputStatusIdx) > 1) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Status can be updated by only stage.",
          });
        }

        return await ctx.prisma.ticket.update({
          where: {
            id: ticket.id,
          },
          data: {
            status: input.status,
          },
        });
      }
    }),
});
