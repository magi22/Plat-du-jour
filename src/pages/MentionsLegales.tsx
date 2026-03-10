import { Link } from "react-router-dom";
import logo from "../assets/Logomascotte.svg";

const LAST_UPDATE = "Mars 2025";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Barre de navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Plat du Jour" className="h-8 w-auto" />
          <span className="font-bold text-gray-900">Plat du Jour</span>
        </Link>
        <Link to="/" className="text-sm text-primary font-semibold hover:underline">
          ← Retour à l'accueil
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          Mentions Légales
        </h1>
        <p className="text-sm text-gray-400 mb-10">Dernière mise à jour : {LAST_UPDATE}</p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Éditeur du service</h2>
            <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> <span className="text-amber-600 italic">[À compléter]</span></p>
              <p><strong>Forme juridique :</strong> <span className="text-amber-600 italic">[SA / Sàrl / SAS / SARL / …]</span></p>
              <p><strong>Capital social :</strong> <span className="text-amber-600 italic">[Montant] CHF / EUR</span></p>
              <p><strong>Numéro d'immatriculation :</strong> <span className="text-amber-600 italic">[RC / SIRET / CHE-XXX.XXX.XXX]</span></p>
              <p><strong>Siège social :</strong> <span className="text-amber-600 italic">[Adresse complète]</span></p>
              <p><strong>Numéro TVA :</strong> <span className="text-amber-600 italic">[CHE-XXX.XXX.XXX TVA / FR XX XXX XXX XXX]</span></p>
              <p><strong>Directeur de la publication :</strong> <span className="text-amber-600 italic">[Nom Prénom]</span></p>
              <p><strong>Contact :</strong>{" "}
                <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Hébergement</h2>
            <div className="bg-gray-50 rounded-xl p-5 space-y-2 text-gray-700">
              <p><strong>Hébergeur du site web :</strong> Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, États-Unis — <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-primary underline">vercel.com</a></p>
              <p><strong>Hébergeur des données applicatives :</strong> <span className="text-amber-600 italic">[Nom, adresse de votre serveur/base de données]</span></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos, code source,
              architecture de la base de données) sont protégés par le droit d'auteur et restent la
              propriété exclusive de l'éditeur ou de ses partenaires. Toute reproduction, représentation,
              modification, publication ou adaptation de tout ou partie des éléments du site, quel que
              soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de
              l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Données personnelles</h2>
            <p className="text-gray-700">
              Pour toute information sur le traitement de vos données personnelles, consultez notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
            <p className="text-gray-700">
              Ce site utilise uniquement des cookies fonctionnels strictement nécessaires à la
              navigation (authentification, préférences de langue). Aucun cookie publicitaire
              n'est déposé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Liens hypertextes</h2>
            <p className="text-gray-700">
              Ce site peut contenir des liens vers des sites tiers. L'éditeur n'est pas responsable
              du contenu ou des pratiques de confidentialité de ces sites. La mise en place d'un lien
              vers ce site nécessite l'accord préalable de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Droit applicable</h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont soumises au droit en vigueur dans le pays
              d'établissement de l'éditeur. En cas de litige, et après tentative de résolution
              amiable, les tribunaux compétents du ressort du siège social de l'éditeur seront
              saisis.
            </p>
          </section>

        </div>

        {/* ─── ENCART POINTS À COMPLÉTER ──────────────────────────────────────── */}
        <div className="mt-16 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-amber-800 mb-1">
            ⚠️ Points à compléter par l'éditeur
          </h2>
          <p className="text-sm text-amber-700 mb-5">
            Les mentions légales sont obligatoires dans la plupart des pays européens. Voici ce que
            vous devez impérativement renseigner selon votre pays d'établissement :
          </p>
          <ul className="space-y-3 text-sm text-amber-900">
            {[
              { label: "Identité complète de l'éditeur (tous pays)", detail: "Raison sociale, forme juridique, capital social, numéro d'immatriculation (SIRET/RC/CHE), adresse du siège. Obligatoire partout en UE et en Suisse." },
              { label: "Directeur de la publication (France)", detail: "En droit français (LCEN art. 6 III), le nom du directeur de publication doit figurer. Obligatoire pour tout service de communication au public en ligne." },
              { label: "Numéro TVA intracommunautaire (UE)", detail: "Si vous êtes assujetti à la TVA dans un pays de l'UE, ce numéro doit être visible sur toutes vos communications commerciales." },
              { label: "Numéro IDE / CHE (Suisse)", detail: "En Suisse, le numéro d'identification des entreprises (IDE, format CHE-XXX.XXX.XXX) doit figurer." },
              { label: "Hébergeur des données (tous pays)", detail: "Nom, adresse et coordonnées de votre hébergeur de base de données et de serveur applicatif (différent de Vercel si vous avez une API ou une BDD séparée)." },
              { label: "Médiation de la consommation (France/Belgique)", detail: "En France, tout professionnel est tenu de proposer un médiateur de la consommation. Indiquez le nom et l'URL du médiateur choisi." },
              { label: "Agrément / autorisation (si applicable)", detail: "Si votre activité nécessite un agrément (ex. paiement, données de santé), mentionnez-le ainsi que l'autorité de tutelle." },
              { label: "Droit applicable précisé", detail: "Indiquez explicitement si vous vous placez sous le droit suisse (CO, LPD), français (Code de la consommation, RGPD), belge ou autre." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-amber-400 bg-white mt-0.5" />
                <span><strong>{item.label} :</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-amber-600 italic">
            Ce document ne constitue pas un avis juridique. Faites-le valider par un juriste ou un avocat
            spécialisé avant toute mise en ligne définitive.
          </p>
        </div>

      </main>

      <footer className="border-t border-black/5 mt-8 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Plat du Jour — Tous droits réservés ·{" "}
        <Link to="/cgu" className="hover:text-primary">CGU</Link>{" "}·{" "}
        <Link to="/politique-de-confidentialite" className="hover:text-primary">Politique de confidentialité</Link>
      </footer>
    </div>
  );
}
