import { Link } from "react-router-dom";
import logo from "../assets/Logomascotte.svg";

const LAST_UPDATE = "Mars 2025";

export default function PolitiqueConfidentialite() {
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
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-gray-400 mb-10">Dernière mise à jour : {LAST_UPDATE}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées via l'application <strong>Plat du Jour</strong> est
              la société éditrice dont les coordonnées complètes figurent dans les{" "}
              <Link to="/mentions-legales" className="text-primary underline">Mentions Légales</Link>.
              Pour toute question relative à vos données, contactez-nous à :{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Données collectées</h2>
            <p>Nous collectons les catégories de données suivantes :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li><strong>Données d'inscription :</strong> nom, adresse e-mail, mot de passe (haché), photo de profil (facultative).</li>
              <li><strong>Données de géolocalisation :</strong> position approximative pour afficher les restaurants à proximité (uniquement si vous l'autorisez).</li>
              <li><strong>Données de navigation :</strong> pages consultées, recherches effectuées, restaurants favoris, avis laissés.</li>
              <li><strong>Données de transaction :</strong> abonnement souscrit, historique de facturation (sans stockage des données bancaires).</li>
              <li><strong>Données techniques :</strong> adresse IP, type d'appareil, système d'exploitation, version de l'application, journaux d'erreurs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Finalités et bases légales du traitement</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Finalité</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Base légale (RGPD)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Fourniture du service et gestion de compte", "Exécution du contrat (art. 6.1.b)"],
                    ["Géolocalisation pour afficher les restaurants proches", "Consentement (art. 6.1.a)"],
                    ["Facturation des abonnements Premium", "Exécution du contrat (art. 6.1.b)"],
                    ["Amélioration du service et analyses statistiques", "Intérêt légitime (art. 6.1.f)"],
                    ["Envoi de notifications et e-mails de service", "Exécution du contrat (art. 6.1.b)"],
                    ["Envoi de communications marketing", "Consentement (art. 6.1.a)"],
                    ["Respect des obligations légales (comptabilité, lutte contre la fraude)", "Obligation légale (art. 6.1.c)"],
                  ].map(([fin, base], i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="p-3 border border-gray-200">{fin}</td>
                      <td className="p-3 border border-gray-200 text-gray-500">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Durée de conservation</h2>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Données de compte : pendant toute la durée de l'inscription + 3 ans après suppression du compte.</li>
              <li>Données de transaction : 10 ans (obligation comptable légale).</li>
              <li>Journaux techniques : 12 mois maximum.</li>
              <li>Données marketing (consentement) : jusqu'au retrait du consentement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Partage des données</h2>
            <p>Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li><strong>Restaurants partenaires :</strong> uniquement les informations nécessaires à la réservation (prénom, heure, nombre de personnes).</li>
              <li><strong>Prestataires techniques :</strong> hébergement, paiement, analytics — liés par des contrats de sous-traitance conformes au RGPD.</li>
              <li><strong>Autorités compétentes :</strong> sur réquisition judiciaire ou obligation légale.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Transferts hors UE</h2>
            <p>
              Si certains prestataires traitent vos données hors de l'Espace Économique Européen, nous
              nous assurons qu'ils bénéficient d'un niveau de protection adéquat (décision d'adéquation
              de la Commission Européenne ou Clauses Contractuelles Types).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li><strong>Droit d'accès</strong> à vos données personnelles.</li>
              <li><strong>Droit de rectification</strong> des données inexactes ou incomplètes.</li>
              <li><strong>Droit à l'effacement</strong> (« droit à l'oubli »).</li>
              <li><strong>Droit à la limitation</strong> du traitement.</li>
              <li><strong>Droit à la portabilité</strong> de vos données.</li>
              <li><strong>Droit d'opposition</strong> au traitement pour intérêt légitime ou marketing.</li>
              <li><strong>Droit de retirer votre consentement</strong> à tout moment sans affecter la licéité des traitements antérieurs.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>.
              Nous répondrons dans un délai maximum d'<strong>un mois</strong>. En cas de réponse
              insatisfaisante, vous pouvez introduire une réclamation auprès de l'autorité de contrôle
              compétente de votre pays (CNIL en France, APD en Belgique, PFPDT en Suisse, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies et technologies similaires</h2>
            <p>
              L'application utilise des technologies de stockage local (tokens d'authentification,
              préférences de langue) strictement nécessaires au fonctionnement du service. Aucun cookie
              publicitaire tiers n'est déposé sans votre consentement explicite. Si des outils d'analyse
              d'audience sont utilisés, ils sont configurés en mode anonymisé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
              vos données contre tout accès non autorisé, perte ou divulgation : chiffrement des
              communications (HTTPS/TLS), hachage des mots de passe, accès restreint aux données de
              production, sauvegardes régulières.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Modifications</h2>
            <p>
              Cette politique peut être mise à jour. En cas de modification substantielle, nous vous en
              informerons par e-mail ou notification dans l'application au moins 30 jours avant l'entrée
              en vigueur des changements.
            </p>
          </section>

        </div>

        {/* ─── ENCART POINTS À COMPLÉTER ──────────────────────────────────────── */}
        <div className="mt-16 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-amber-800 mb-1">
            ⚠️ Points à compléter par l'éditeur
          </h2>
          <p className="text-sm text-amber-700 mb-5">
            Cette politique est conforme au cadre RGPD (UE 2016/679). Complétez les éléments suivants
            selon votre pays d'établissement et votre infrastructure technique réelle :
          </p>
          <ul className="space-y-3 text-sm text-amber-900">
            {[
              { label: "Coordonnées du DPO", detail: "Si votre traitement est à grande échelle ou concerne des données sensibles, la désignation d'un Délégué à la Protection des Données (DPO) est obligatoire en UE. Indiquez son nom et contact." },
              { label: "Liste des sous-traitants", detail: "Précisez les noms des hébergeurs (ex. Vercel, AWS…), du prestataire de paiement (Stripe, Mollie…) et des outils analytics utilisés." },
              { label: "Transferts hors UE", detail: "Si vos serveurs ou outils sont aux USA ou hors EEE, précisez le mécanisme de transfert (SCCs, Privacy Framework…) pour chaque service concerné." },
              { label: "Spécificités LPD suisse", detail: "Si établi en Suisse : depuis le 1er sept. 2023, la LPD révisée s'applique. Ajoutez une référence à la LPD et au PFPDT (autorité suisse de contrôle)." },
              { label: "Délai de réponse aux demandes", detail: "En Suisse, la LPD prévoit un délai de 30 jours. En UE (RGPD), 1 mois. Vérifiez selon votre pays principal." },
              { label: "Politique cookies détaillée", detail: "Si vous utilisez Google Analytics, Firebase, Meta Pixel ou tout autre tracker tiers, un bandeau de consentement cookies (CMPs) est obligatoire en UE." },
              { label: "Données des mineurs", detail: "Si vous acceptez des utilisateurs de moins de 16 ans (13 ans dans certains États membres), des mécanismes de vérification parentale doivent être mis en place." },
              { label: "Registre des activités de traitement", detail: "Obligatoire pour les entreprises de plus de 250 salariés en UE, et recommandé pour toutes. Documentez chaque traitement en interne." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-amber-400 bg-white mt-0.5" />
                <span><strong>{item.label} :</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-amber-600 italic">
            Ce document ne constitue pas un avis juridique. Faites-le valider par un juriste spécialisé
            en protection des données avant toute mise en production.
          </p>
        </div>

      </main>

      <footer className="border-t border-black/5 mt-8 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Plat du Jour — Tous droits réservés ·{" "}
        <Link to="/cgu" className="hover:text-primary">CGU</Link>{" "}·{" "}
        <Link to="/mentions-legales" className="hover:text-primary">Mentions légales</Link>
      </footer>
    </div>
  );
}
