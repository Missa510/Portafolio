import { actions } from "astro:actions";
import { toast } from "sonner";

export default function EmailSender() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const { data, error } = await actions.send(formData);

    if (error) {
      toast.error(error.message);
      console.error(error.message);
      return;
    }

    toast.success("Email enviado correctamente! Pronto recibira una respuesta.");
    console.log(data);

    form.reset();
  };

  return (
    <form id="form" className="flex flex-col gap-2 rounded-lg" method="POST" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        name="name"
        id="name"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        className="text-black p-2 rounded-lg"
        type="email"
        name="email"
        id="email"
        required
      />
      <label htmlFor="subject">Asunto</label>
      <input
        className="text-black p-2 rounded-lg"
        type="text"
        name="subject"
        id="subject"
        required
      />
      <label htmlFor="message">Mensaje</label>
      <textarea
        className="text-black p-2 rounded-lg"
        name="message"
        id="message"
        required
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}