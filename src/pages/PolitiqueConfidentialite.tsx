import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logomascotte.svg";

const LAST_UPDATE = "Mars 2025";

export default function PolitiqueConfidentialite() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

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
        <p className="text-sm text-gray-400 mb-2">Dernière mise à jour : {LAST_UPDATE}</p>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          La protection de vos données personnelles est une priorité pour <strong>Plat du Jour</strong>.
          Cette politique vous explique quelles données nous collectons, pourquoi, comment nous les
          utilisons, combien de temps nous les conservons et quels sont vos droits. Elle est conforme
          au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la Loi
          fédérale suisse sur la Protection des Données (nLPD).
        </p>

        {/* Sommaire */}
        <nav className="bg-gray-50 rounded-xl p-5 mb-10 text-sm">
          <p className="font-semibold text-gray-700 mb-3">Sommaire</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 columns-2 gap-x-6">
            {[
              "Responsable du traitement",
              "Données collectées",
              "Finalités et bases légales",
              "Durée de conservation",
              "Partage des données",
              "Transferts hors EEE",
              "Vos droits",
              "Cookies et traceurs",
              "Géolocalisation",
              "Profilage et décisions automatisées",
              "Sécurité",
              "Données des mineurs",
              "Violations de données",
              "Modifications",
            ].map((titre, i) => (
              <li key={i}>{titre}</li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées via l'application et le site web{" "}
              <strong>Plat du Jour</strong> est la société éditrice dont les coordonnées complètes
              figurent dans les{" "}
              <Link to="/mentions-legales" className="text-primary underline">Mentions Légales</Link>.
            </p>
            <p className="mt-3">
              Pour toute question relative à vos données personnelles ou pour exercer vos droits,
              contactez-nous à :{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">
                info@platdujour.ch
              </a>{" "}
              en précisant « Protection des données » dans l'objet de votre message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Données collectées</h2>
            <p>Nous collectons les catégories de données suivantes selon votre utilisation du Service :</p>

            <div className="mt-4 space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Données d'identité et de compte</p>
                <p className="text-gray-600">Nom, prénom, adresse e-mail, mot de passe (haché, jamais stocké en clair), photo de profil (facultative), préférences alimentaires (si renseignées volontairement).</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Données de géolocalisation</p>
                <p className="text-gray-600">Position géographique approximative (rayon de quelques centaines de mètres) pour afficher les restaurants à proximité. Collectée uniquement si vous accordez la permission sur votre appareil et jamais stockée de façon permanente sur nos serveurs.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Données de navigation et d'utilisation</p>
                <p className="text-gray-600">Restaurants consultés, plats recherchés, restaurants mis en favoris, avis et notes publiés, fréquence et horaires d'utilisation, fonctionnalités utilisées.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Données de transaction et de facturation</p>
                <p className="text-gray-600">Abonnement souscrit, historique de facturation, montants payés. Les données bancaires (numéro de carte, IBAN) ne transitent pas par nos systèmes et sont traitées directement par notre prestataire de paiement certifié PCI-DSS.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Données techniques</p>
                <p className="text-gray-600">Adresse IP (partiellement anonymisée), type d'appareil et modèle, système d'exploitation et version, version de l'application, identifiants de session, journaux d'erreurs et de performance.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">Données des restaurateurs partenaires</p>
                <p className="text-gray-600">Raison sociale, nom du référent, adresse e-mail professionnelle, numéro de téléphone, adresse du restaurant, photos et descriptions des plats publiés, données de facturation de l'abonnement restaurant.</p>
              </div>
            </div>

            <p className="mt-4 text-gray-600">
              Nous ne collectons pas de données sensibles au sens du RGPD (origine ethnique, convictions
              religieuses, données de santé, données biométriques, etc.), sauf mention explicite et
              consentement exprès de votre part. Les préférences alimentaires que vous renseignez
              volontairement (végétarien, halal, sans gluten, etc.) sont considérées comme des données
              potentiellement sensibles et sont traitées avec une protection renforcée.
            </p>
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
                    ["Création et gestion du compte utilisateur", "Exécution du contrat (art. 6.1.b)"],
                    ["Affichage des restaurants et menus à proximité", "Exécution du contrat (art. 6.1.b)"],
                    ["Géolocalisation pour suggestions personnalisées", "Consentement (art. 6.1.a)"],
                    ["Traitement des réservations et commandes", "Exécution du contrat (art. 6.1.b)"],
                    ["Facturation des abonnements Premium", "Exécution du contrat (art. 6.1.b)"],
                    ["Envoi de notifications de service (confirmation de réservation, etc.)", "Exécution du contrat (art. 6.1.b)"],
                    ["Envoi de communications marketing et offres personnalisées", "Consentement (art. 6.1.a)"],
                    ["Amélioration du service et analyses statistiques d'usage", "Intérêt légitime (art. 6.1.f)"],
                    ["Détection et prévention de la fraude", "Intérêt légitime (art. 6.1.f) + Obligation légale (art. 6.1.c)"],
                    ["Conservation des données de facturation", "Obligation légale (art. 6.1.c)"],
                    ["Réponse aux demandes de support et aux litiges", "Intérêt légitime (art. 6.1.f)"],
                    ["Mise en conformité avec les obligations légales et réglementaires", "Obligation légale (art. 6.1.c)"],
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
            <p className="mb-3">Les données sont conservées pendant la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Catégorie de données</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Durée de conservation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Données de compte actif", "Pendant toute la durée de l'inscription"],
                    ["Données de compte après suppression", "3 ans (délai de prescription civile)"],
                    ["Données de transaction et factures", "10 ans (obligation comptable légale)"],
                    ["Journaux techniques et d'accès", "12 mois maximum"],
                    ["Données de géolocalisation en temps réel", "Non stockées de façon permanente"],
                    ["Avis et notations publiés", "Durée d'activité du compte + 3 ans"],
                    ["Données marketing (consentement)", "Jusqu'au retrait du consentement, max. 3 ans sans activité"],
                    ["Cookies fonctionnels", "13 mois maximum"],
                    ["Données de support client", "5 ans après clôture du dossier"],
                  ].map(([cat, duree], i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="p-3 border border-gray-200">{cat}</td>
                      <td className="p-3 border border-gray-200 text-gray-500">{duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-gray-600">
              À l'expiration de ces délais, les données sont soit supprimées définitivement, soit
              anonymisées de façon irréversible à des fins statistiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Partage des données</h2>
            <p>
              Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers à des fins
              commerciales. Elles peuvent être partagées dans les cas suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-gray-700">
              <li>
                <strong>Restaurants partenaires :</strong> Uniquement les informations nécessaires à
                la réservation ou à la commande (prénom, heure, nombre de convives, allergènes signalés).
                Les restaurateurs s'engagent contractuellement à ne pas utiliser ces données à d'autres fins.
              </li>
              <li>
                <strong>Prestataires techniques (sous-traitants) :</strong> Hébergement cloud, prestataire
                de paiement, service d'envoi d'e-mails transactionnels, outil de gestion des notifications
                push. Ces prestataires agissent exclusivement selon nos instructions et sont liés par des
                contrats de sous-traitance conformes au RGPD (art. 28).
              </li>
              <li>
                <strong>Autorités compétentes :</strong> Sur réquisition judiciaire, injonction
                administrative ou obligation légale, nous pouvons communiquer les données aux autorités
                habilitées.
              </li>
              <li>
                <strong>Restructuration d'entreprise :</strong> En cas de fusion, acquisition, cession
                d'actifs ou procédure collective, vos données pourraient être transférées au successeur,
                qui serait tenu de respecter la présente politique.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Transferts hors Espace Économique Européen</h2>
            <p>
              Certains de nos prestataires techniques peuvent être établis ou stocker des données en
              dehors de l'Espace Économique Européen (EEE), notamment aux États-Unis. Dans ce cas,
              nous nous assurons que ces transferts sont encadrés par des garanties appropriées :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Décision d'adéquation de la Commission Européenne (ex. pays reconnus comme offrant une protection équivalente à l'UE).</li>
              <li>Clauses Contractuelles Types (CCT/SCCs) adoptées par la Commission Européenne.</li>
              <li>Cadre de protection des données UE–États-Unis (EU-US Data Privacy Framework) pour les transferts vers des entités américaines certifiées.</li>
            </ul>
            <p className="mt-3">
              Vous pouvez obtenir une copie des garanties applicables en contactant :{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Vos droits</h2>
            <p>
              Conformément au RGPD (Chapitre III) et, si applicable, à la LPD suisse, vous disposez
              des droits suivants sur vos données personnelles :
            </p>
            <div className="mt-4 space-y-3">
              {[
                { droit: "Droit d'accès (art. 15 RGPD)", desc: "Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie." },
                { droit: "Droit de rectification (art. 16)", desc: "Faire corriger des données inexactes ou compléter des données incomplètes." },
                { droit: "Droit à l'effacement (art. 17)", desc: "Demander la suppression de vos données dans les cas prévus par la loi (droit à l'oubli)." },
                { droit: "Droit à la limitation (art. 18)", desc: "Restreindre temporairement le traitement de vos données en cas de contestation ou pendant vérification." },
                { droit: "Droit à la portabilité (art. 20)", desc: "Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, ou les faire transmettre à un autre responsable." },
                { droit: "Droit d'opposition (art. 21)", desc: "Vous opposer à tout moment au traitement fondé sur l'intérêt légitime ou au traitement à des fins de prospection commerciale." },
                { droit: "Droit de retrait du consentement", desc: "Retirer votre consentement à tout moment sans que cela n'affecte la licéité des traitements effectués avant ce retrait." },
                { droit: "Droit de ne pas faire l'objet d'une décision automatisée (art. 22)", desc: "Ne pas être soumis à une décision produisant des effets juridiques basée exclusivement sur un traitement automatisé." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="text-primary font-bold text-sm mt-0.5 shrink-0">→</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.droit}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Pour exercer l'un de ces droits, envoyez votre demande à{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>{" "}
              en joignant une pièce d'identité si nécessaire à la vérification de votre identité.
              Nous répondrons dans un délai maximum d'<strong>un mois</strong> (30 jours calendaires).
            </p>
            <p className="mt-3">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
              auprès de l'autorité de contrôle compétente dans votre pays :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li><strong>France :</strong> CNIL — cnil.fr</li>
              <li><strong>Belgique :</strong> APD (Autorité de Protection des Données) — autoriteprotectiondonnees.be</li>
              <li><strong>Suisse :</strong> PFPDT (Préposé fédéral à la protection des données) — edoeb.admin.ch</li>
              <li><strong>Luxembourg :</strong> CNPD — cnpd.public.lu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies et technologies similaires</h2>
            <p>
              L'application et le site web utilisent des technologies de stockage local. Voici les
              types de traceurs utilisés :
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Finalité</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">Consentement requis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Cookie de session", "Maintien de la connexion", "Non (strictement nécessaire)"],
                    ["Préférences de langue (localStorage)", "Mémoriser la langue choisie", "Non (strictement nécessaire)"],
                    ["Tokens d'authentification", "Connexion persistante (option « Se souvenir de moi »)", "Non (strictement nécessaire)"],
                    ["Analytics anonymisés", "Mesure d'audience agrégée", "Oui (opt-in)"],
                    ["Notifications push", "Alertes de réservation et nouveaux menus", "Oui (opt-in)"],
                  ].map(([type, fin, consent], i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="p-3 border border-gray-200 font-medium">{type}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{fin}</td>
                      <td className="p-3 border border-gray-200 text-gray-500">{consent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-gray-600">
              Vous pouvez à tout moment gérer ou révoquer vos consentements depuis les paramètres
              de confidentialité de l'application. Le refus de certains cookies non essentiels
              n'affecte pas l'accès aux fonctionnalités principales du Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Géolocalisation</h2>
            <p>
              La géolocalisation est utilisée uniquement pour vous afficher les restaurants proches
              de votre position actuelle. Elle fonctionne via l'API de géolocalisation de votre système
              d'exploitation (iOS ou Android) et nécessite votre autorisation explicite.
            </p>
            <p className="mt-3">
              <strong>Ce que nous ne faisons pas :</strong> nous ne stockons pas votre historique de
              déplacements, ne suivons pas vos déplacements en arrière-plan (même si l'application
              est fermée), ne vendons pas vos données de localisation à des tiers.
            </p>
            <p className="mt-3">
              Vous pouvez révoquer l'accès à la localisation à tout moment depuis les paramètres
              de votre appareil. Dans ce cas, vous pouvez entrer manuellement une ville ou une adresse
              pour chercher des restaurants.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Profilage et décisions automatisées</h2>
            <p>
              Nous utilisons vos données de navigation (restaurants consultés, recherches, favoris) pour
              vous proposer des suggestions personnalisées de restaurants et de plats du jour susceptibles
              de vous intéresser. Ce traitement constitue du profilage au sens de l'art. 4.4 du RGPD.
            </p>
            <p className="mt-3">
              Ce profilage ne produit <strong>aucun effet juridique</strong> ni aucune décision
              significative vous affectant. Il vise uniquement à améliorer la pertinence des
              recommandations affichées. Vous pouvez vous opposer à ce profilage à tout moment
              en contactant{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, perte, altération ou divulgation :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Chiffrement de toutes les communications (HTTPS/TLS 1.3).</li>
              <li>Hachage des mots de passe avec algorithme bcrypt ou Argon2.</li>
              <li>Authentification à deux facteurs (2FA) disponible en option.</li>
              <li>Accès aux données de production restreint au personnel habilité.</li>
              <li>Sauvegardes chiffrées régulières avec tests de restauration.</li>
              <li>Journalisation et surveillance des accès aux données sensibles.</li>
              <li>Politique de gestion des incidents de sécurité formalisée.</li>
            </ul>
            <p className="mt-3 text-gray-600">
              Malgré ces mesures, aucun système n'est infaillible. Nous vous recommandons d'utiliser
              un mot de passe fort et unique pour votre compte Plat du Jour.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Données des mineurs</h2>
            <p>
              Le Service n'est pas destiné aux enfants de moins de 16 ans (ou l'âge de consentement
              numérique applicable dans votre pays). Nous ne collectons pas sciemment de données
              personnelles concernant des mineurs en dessous de cet âge sans le consentement vérifiable
              d'un parent ou tuteur légal.
            </p>
            <p className="mt-3">
              Si vous êtes parent ou tuteur et estimez que votre enfant nous a transmis des données
              sans votre consentement, contactez-nous immédiatement à{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>{" "}
              pour que nous procédions à leur suppression dans les meilleurs délais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Notification en cas de violation de données</h2>
            <p>
              En cas de violation de données personnelles susceptible d'engendrer un risque pour vos
              droits et libertés, nous nous engageons à :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Notifier l'autorité de contrôle compétente dans les <strong>72 heures</strong> suivant la détection de l'incident (art. 33 RGPD).</li>
              <li>Vous informer directement, dans les meilleurs délais, si la violation présente un risque élevé pour vos droits et libertés (art. 34 RGPD).</li>
              <li>Documenter l'incident et les mesures correctives prises.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">14. Modifications de la politique</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour pour refléter des changements
              dans nos pratiques, dans la législation applicable ou dans notre infrastructure technique.
              La date de dernière mise à jour est indiquée en haut de ce document.
            </p>
            <p className="mt-3">
              En cas de modification substantielle, nous vous en informerons par e-mail ou par
              notification dans l'application au moins <strong>30 jours avant</strong> l'entrée en
              vigueur des changements. La poursuite de l'utilisation du Service après cette date
              vaut acceptation de la politique mise à jour.
            </p>
          </section>

        </div>

        {/* ─── ENCART POINTS À COMPLÉTER ──────────────────────────────────────── */}
        <div className="mt-16 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-amber-800 mb-1">
            ⚠️ Points à compléter par l'éditeur
          </h2>
          <p className="text-sm text-amber-700 mb-5">
            Cette politique est conforme au cadre RGPD (UE 2016/679) et à la nLPD suisse. Complétez
            les éléments suivants selon votre pays d'établissement et votre infrastructure réelle :
          </p>
          <ul className="space-y-3 text-sm text-amber-900">
            {[
              { label: "Coordonnées du DPO (Délégué à la Protection des Données)", detail: "Obligatoire en UE si vous traitez des données à grande échelle ou des catégories sensibles. Indiquez son nom et son adresse e-mail de contact dédiée." },
              { label: "Liste nominative des sous-traitants", detail: "Indiquez les noms précis de votre hébergeur (Vercel + votre backend), prestataire de paiement (Stripe, Datatrans, Mollie…), service d'envoi d'e-mails (SendGrid, Mailchimp…), outil analytics (Mixpanel, Amplitude, Firebase…)." },
              { label: "Transferts hors EEE — détail par sous-traitant", detail: "Pour chaque sous-traitant établi aux USA ou hors EEE, précisez le mécanisme de transfert retenu (CCT, EU-US DPF, décision d'adéquation)." },
              { label: "Spécificités nLPD suisse", detail: "Si établi en Suisse et ciblant des résidents suisses : ajoutez une référence explicite à la nLPD, au PFPDT et au délai de 30 jours pour répondre aux demandes. Remplacez ou complétez les références RGPD." },
              { label: "Politique cookies et bandeau de consentement", detail: "Si vous utilisez Google Analytics, Firebase Analytics, Meta Pixel ou tout traceur tiers, un bandeau de consentement conforme (CMP) est obligatoire en UE. Intégrez un outil comme Axeptio, Cookiebot ou OneTrust." },
              { label: "Âge de consentement numérique", detail: "En France et en Belgique, l'âge est 15 ans. En Suisse, 16 ans (Ordonnance OPDo). Adaptez l'article 12 selon votre marché principal." },
              { label: "Registre des activités de traitement (RAT)", detail: "Documentez chaque traitement en interne (art. 30 RGPD). Obligatoire pour les entreprises de plus de 250 salariés, recommandé pour toutes." },
              { label: "Analyses d'impact (AIPD/DPIA)", detail: "Si vous traitez des données de géolocalisation à grande échelle ou effectuez du profilage, une analyse d'impact (AIPD) peut être obligatoire avant le lancement." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-amber-400 bg-white mt-0.5" />
                <span><strong>{item.label} :</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-amber-600 italic">
            Ce document ne constitue pas un avis juridique. Faites-le valider par un juriste spécialisé
            en protection des données (RGPD/LPD) avant toute mise en production.
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
