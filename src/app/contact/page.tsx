import { ContactForm } from "@/components/ContactForm";
import { contactEmail, socialLinks } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact the Embodied Intelligence Group at the University of Florida about joining, partnerships, or general questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section>
      <div className="page-shell py-12 sm:py-20">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-[1.15rem] leading-[1.4] text-white">
          <h1 className="font-medium leading-[1.2]">Contact Us</h1>
          <p>
            If you want to join the group, partner with EIG, or have a general
            question, write to{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="underline underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </p>
          <p>
            Students can also join the{" "}
            <a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Discord
            </a>
            .
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
