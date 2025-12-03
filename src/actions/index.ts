import { ActionError, defineAction } from 'astro:actions';
import { Resend } from 'resend';
import { z } from "zod";

const myResendApi: string = import.meta.env.RESEND_API_KEY
const myEmail: string = import.meta.env.EMAIL_MISSA
const resend = new Resend(myResendApi);

export const server = {
    send: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(3),
            email: z.string().email(),
            subject: z.string().min(3),
            message: z.string().min(3).max(500),
        }),
        handler: async ({ name, email, subject, message }) => {
            const { data, error } = await resend.emails.send({
                from: `${name} <${email}>`,
                to: [myEmail],
                subject,
                html: `<p>${message}</p>`,
            });

            if (error) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: error.message,
                });
            }

            return data;
        },
    }),
};