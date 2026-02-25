import { motion, type Variants } from 'framer-motion';
import { fadeUp, staggerContainer, defaultViewport } from '../../animations/variants';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Variante d'animation personnalisée (défaut : fadeUp) */
  variants?: Variants;
  /** Active le stagger sur les enfants directs (les enfants doivent être motion.*) */
  stagger?: boolean;
};

/**
 * Wrapper d'animation d'entrée réutilisable.
 * Sans stagger : le div lui-même s'anime en fadeUp au scroll.
 * Avec stagger : le div est invisible et ses enfants motion.* s'animent en cascade.
 */
export function FadeIn({ children, className, variants = fadeUp, stagger = false }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={stagger ? staggerContainer : variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
