import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SectionContainer } from "./ui/SectionContainer";
import { useLanguage } from "../i18n/LanguageContext";

const itemClass = `
  rounded-2xl overflow-hidden border
  bg-white/80 backdrop-blur-xl border-gray-200
  hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(193,17,30,0.12)]
  transition-all
`;

const triggerClass = `
  w-full flex items-center justify-between gap-4 p-6 text-left
  font-semibold text-gray-900 hover:bg-gray-50
  transition-colors group
`;

export function Faq() {
  const { t } = useLanguage();
  const items = t.faq.items;
  const midPoint = Math.ceil(items.length / 2);
  const column1 = items.slice(0, midPoint);
  const column2 = items.slice(midPoint);

  function FaqColumn({ list, offset = 0 }: { list: typeof column1; offset?: number }) {
    return (
      <Accordion.Root type="single" collapsible className="space-y-4">
        {list.map((item, idx) => (
          <motion.div
            key={idx + offset}
            initial={{ opacity: 0, x: offset === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
          >
            <Accordion.Item value={`item-${idx + offset}`} className={itemClass}>
              <Accordion.Header>
                <Accordion.Trigger className={triggerClass}>
                  <span className="leading-snug">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className="text-primary flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden">
                <div className="px-6 pb-6 -mt-2 text-sm leading-relaxed text-gray-600">
                  {item.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </motion.div>
        ))}
      </Accordion.Root>
    );
  }

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-transparent">
      <SectionContainer className="relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <HelpCircle size={26} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t.faq.h2}
            </h2>
          </div>
          <p className="text-gray-600 text-lg">{t.faq.subtitle}</p>
        </motion.div>

        {/* Accordéon deux colonnes */}
        <div className="grid md:grid-cols-2 gap-8">
          <FaqColumn list={column1} offset={0} />
          <FaqColumn list={column2} offset={midPoint} />
        </div>

        {/* CTA contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-5">{t.faq.noAnswer}</p>
          <a
            href="mailto:info@platdujour.ch"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-[#ff4757] text-white shadow-[0_12px_30px_rgba(193,17,30,0.25)] hover:shadow-[0_16px_40px_rgba(193,17,30,0.35)] hover:scale-[1.03] transition-all"
          >
            <Mail size={18} />
            {t.faq.contact}
          </a>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
