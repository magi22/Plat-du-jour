import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logomascotte.svg";

const LAST_UPDATE = "Mars 2025";

export default function Cgu() {
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
          Conditions Générales d'Utilisation
        </h1>
        <p className="text-sm text-gray-400 mb-2">Dernière mise à jour : {LAST_UPDATE}</p>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation
          de l'application mobile et du site web <strong>Plat du Jour</strong>. En utilisant le Service,
          vous acceptez sans réserve les présentes conditions. Veuillez les lire attentivement.
        </p>

        {/* Sommaire */}
        <nav className="bg-gray-50 rounded-xl p-5 mb-10 text-sm">
          <p className="font-semibold text-gray-700 mb-3">Sommaire</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-600 columns-2 gap-x-6">
            {[
              "Présentation du service",
              "Acceptation des CGU",
              "Accès et inscription",
              "Offres Premium et facturation",
              "Réservations et commandes",
              "Avis et contenus utilisateurs",
              "Responsabilités des utilisateurs",
              "Responsabilités de l'éditeur",
              "Propriété intellectuelle",
              "Protection des données",
              "Suspension et résiliation",
              "Force majeure",
              "Droit applicable",
              "Dispositions finales",
            ].map((titre, i) => (
              <li key={i}>{titre}</li>
            ))}
          </ol>
        </nav>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Présentation du service</h2>
            <p>
              L'application <strong>Plat du Jour</strong> (ci-après « le Service ») est une plateforme
              mobile et web permettant aux utilisateurs de découvrir en temps réel les menus du jour
              proposés par des restaurants partenaires, de consulter les prix, les allergènes, les photos
              des plats, et le cas échéant, de réserver une table ou de passer commande à emporter.
            </p>
            <p className="mt-3">
              Le Service est édité par la société dont les coordonnées complètes figurent dans les{" "}
              <Link to="/mentions-legales" className="text-primary underline">Mentions Légales</Link>.
              L'application est disponible sur iOS (App Store) et Android (Google Play Store).
            </p>
            <p className="mt-3">
              Le Service comprend deux interfaces distinctes : une interface utilisateur (consommateurs
              souhaitant découvrir des plats du jour) et une interface restaurateur (professionnels de
              la restauration souhaitant publier leurs menus et gérer leurs réservations). Les présentes
              CGU s'appliquent aux deux types d'utilisateurs, sauf disposition spécifique mentionnée
              explicitement pour l'un ou l'autre.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Acceptation des CGU</h2>
            <p>
              L'utilisation du Service, qu'elle soit à titre gratuit ou payant, implique l'acceptation
              pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous devez
              cesser immédiatement d'utiliser le Service.
            </p>
            <p className="mt-3">
              Ces CGU peuvent être modifiées à tout moment par l'éditeur. La version en vigueur est
              celle publiée sur le Service à la date de votre connexion. En cas de modification
              substantielle, les utilisateurs inscrits seront informés par e-mail ou par notification
              dans l'application au moins <strong>30 jours avant</strong> l'entrée en vigueur des
              changements. La poursuite de l'utilisation du Service après cette date vaut acceptation
              des nouvelles conditions.
            </p>
            <p className="mt-3">
              Les présentes CGU sont rédigées en langue française. En cas de traduction dans une autre
              langue, la version française fait foi en cas de contradiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accès au service et inscription</h2>
            <p>
              Le Service est accessible en lecture (consultation des menus et restaurants) sans
              inscription. Certaines fonctionnalités avancées (réservation, favoris, avis, notifications
              personnalisées, historique de commandes) nécessitent la création d'un compte personnel.
            </p>
            <p className="mt-3">
              Lors de l'inscription, l'utilisateur s'engage à :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Fournir des informations exactes, complètes et à jour.</li>
              <li>Maintenir la confidentialité de ses identifiants de connexion.</li>
              <li>Notifier immédiatement l'éditeur de toute utilisation non autorisée de son compte.</li>
              <li>Ne pas créer de compte au nom d'une autre personne sans son autorisation.</li>
            </ul>
            <p className="mt-3">
              L'utilisateur est seul responsable de toute activité réalisée depuis son compte.
              L'éditeur ne saurait être tenu responsable des dommages résultant de l'utilisation
              frauduleuse d'un compte dont les identifiants ont été divulgués par l'utilisateur.
            </p>
            <p className="mt-3">
              Le Service est réservé aux personnes majeures ou ayant obtenu l'autorisation préalable
              d'un représentant légal, conformément à la législation de leur pays de résidence. L'éditeur
              se réserve le droit de demander une preuve d'âge à tout moment.
            </p>
            <p className="mt-3">
              L'inscription peut se faire directement par e-mail/mot de passe, ou via des fournisseurs
              d'identité tiers (Apple, Google). Dans ce cas, les conditions d'utilisation du fournisseur
              concerné s'appliquent également.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Offres Premium et facturation</h2>
            <p>
              Des abonnements payants (« Premium ») sont proposés aux utilisateurs et aux restaurateurs.
              Les tarifs en vigueur sont affichés dans la section Tarifs de l'application et sur le
              site web. L'éditeur se réserve le droit de modifier ses tarifs à tout moment, avec un
              préavis d'au moins 30 jours pour les abonnés actifs.
            </p>
            <p className="mt-3">
              <strong>Renouvellement automatique :</strong> Tout abonnement est conclu pour la durée
              choisie (mensuelle ou annuelle) et se renouvelle automatiquement à la date d'échéance,
              sauf résiliation effectuée avant cette date. L'utilisateur peut résilier à tout moment
              depuis son espace personnel ou depuis les paramètres de l'App Store / Google Play Store ;
              la résiliation prend effet à la fin de la période en cours et aucun remboursement au
              prorata n'est accordé sauf obligation légale contraire.
            </p>
            <p className="mt-3">
              <strong>Droit de rétractation :</strong> Conformément à la Directive 2011/83/UE
              (droit européen des consommateurs), l'utilisateur bénéficie d'un droit de rétractation
              de <strong>14 jours calendaires</strong> à compter de la souscription, sans avoir à
              justifier sa décision. Ce droit ne s'applique pas si le service numérique a commencé
              à être exécuté avec l'accord préalable exprès de l'utilisateur et sa renonciation
              explicite à ce droit.
            </p>
            <p className="mt-3">
              Pour exercer votre droit de rétractation, contactez-nous à{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>{" "}
              avec l'objet « Rétractation » et vos informations de commande.
            </p>
            <p className="mt-3">
              <strong>Facturation :</strong> Les paiements sont traités par un prestataire de paiement
              sécurisé certifié PCI-DSS. L'éditeur ne stocke aucune donnée bancaire. Une facture
              électronique est émise à chaque renouvellement et accessible depuis l'espace personnel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Réservations et commandes</h2>
            <p>
              Le Service permet aux utilisateurs d'effectuer des réservations de table et, selon les
              restaurants partenaires, de passer des commandes à emporter ou en livraison. La réservation
              ou la commande constitue un contrat direct entre l'utilisateur et le restaurant concerné.
              L'éditeur agit en qualité d'intermédiaire technique et n'est pas partie au contrat.
            </p>
            <p className="mt-3">
              <strong>Conditions de réservation :</strong> Chaque restaurant fixe ses propres conditions
              (délai d'annulation, garanties, prépaiement, etc.). L'utilisateur est tenu de les respecter.
              En cas de non-présentation sans annulation préalable (« no-show »), le restaurant peut
              appliquer des frais conformément à ses propres conditions affichées lors de la réservation.
            </p>
            <p className="mt-3">
              <strong>Exactitude des informations :</strong> Les menus, prix, horaires et disponibilités
              sont publiés sous la responsabilité exclusive des restaurants partenaires. L'éditeur ne
              garantit pas l'exactitude de ces informations et ne pourra être tenu responsable d'erreurs,
              d'indisponibilités ou de changements de dernière minute décidés par le restaurant.
            </p>
            <p className="mt-3">
              <strong>Allergènes :</strong> Les informations sur les allergènes sont fournies à titre
              indicatif par les restaurants. En cas de doute ou d'allergie sévère, l'utilisateur doit
              contacter directement le restaurant avant de passer commande. L'éditeur décline toute
              responsabilité en cas de réaction allergique.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Avis et contenus utilisateurs</h2>
            <p>
              Les utilisateurs peuvent publier des avis, notes et photos sur les restaurants et plats
              du jour. En soumettant un contenu, l'utilisateur accorde à l'éditeur une licence mondiale,
              non exclusive, gratuite et transférable pour utiliser, reproduire, afficher et distribuer
              ce contenu dans le cadre du Service.
            </p>
            <p className="mt-3">
              L'utilisateur garantit que tout contenu publié :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Reflète une expérience authentique et personnelle.</li>
              <li>Ne contient aucune information fausse ou trompeuse.</li>
              <li>Ne viole aucun droit de tiers (droit d'auteur, droit à l'image, données personnelles).</li>
              <li>N'est pas diffamatoire, insultant, discriminatoire ou illicite.</li>
              <li>Ne contient aucun contenu à caractère publicitaire ou promotionnel non déclaré.</li>
            </ul>
            <p className="mt-3">
              L'éditeur se réserve le droit de modérer, modifier ou supprimer tout contenu ne respectant
              pas ces règles, sans préavis et sans obligation de justification. Un mécanisme de signalement
              est disponible sur chaque avis pour permettre aux utilisateurs de signaler les contenus
              inappropriés.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Responsabilités des utilisateurs</h2>
            <p>L'utilisateur s'engage formellement à :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Ne pas utiliser le Service à des fins illicites, frauduleuses ou contraires aux bonnes mœurs.</li>
              <li>Ne pas tenter d'accéder à des zones non autorisées du système d'information.</li>
              <li>Ne pas perturber le fonctionnement du Service par des requêtes excessives (scraping, DDoS, etc.).</li>
              <li>Ne pas créer de faux comptes, manipuler les avis ou la notation des restaurants.</li>
              <li>Ne pas usurper l'identité d'un autre utilisateur, d'un restaurant ou de l'éditeur.</li>
              <li>Ne pas revendre, louer ou sous-licencier l'accès au Service à des tiers.</li>
              <li>Respecter les droits de propriété intellectuelle de l'éditeur et des tiers.</li>
            </ul>
            <p className="mt-3">
              Tout manquement à ces obligations peut entraîner la suspension immédiate du compte et,
              le cas échéant, des poursuites judiciaires. L'utilisateur est seul responsable des
              dommages causés à l'éditeur ou à des tiers du fait du non-respect de ces obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Responsabilités de l'éditeur</h2>
            <p>
              L'éditeur s'efforce d'assurer la disponibilité et la fiabilité du Service mais ne garantit
              pas une disponibilité ininterrompue. Des interruptions temporaires peuvent survenir pour
              des raisons de maintenance, de mise à jour ou de force majeure.
            </p>
            <p className="mt-3">
              <strong>Limitation de responsabilité :</strong> Dans les limites permises par la loi
              applicable, l'éditeur ne saurait être tenu responsable de :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>L'inexactitude des informations publiées par les restaurants partenaires.</li>
              <li>La qualité des plats ou du service fournis par les restaurants.</li>
              <li>Tout dommage indirect, consécutif ou immatériel résultant de l'utilisation du Service.</li>
              <li>La perte de données résultant d'un comportement de l'utilisateur.</li>
              <li>Les dommages résultant de l'utilisation de sites tiers accessibles via des liens présents sur le Service.</li>
            </ul>
            <p className="mt-3">
              La responsabilité totale de l'éditeur, toutes causes confondues, est limitée au montant
              effectivement payé par l'utilisateur au cours des 12 derniers mois précédant l'événement
              dommageable, ou à 100 CHF/EUR si l'utilisateur n'a effectué aucun paiement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments du Service — notamment la marque « Plat du Jour », les logos,
              la mascotte, les textes, le design, l'interface graphique, l'architecture applicative
              et le code source — sont la propriété exclusive de l'éditeur ou font l'objet de licences
              d'utilisation accordées à l'éditeur. Ces éléments sont protégés par les lois relatives
              à la propriété intellectuelle et au droit d'auteur.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, adaptation ou exploitation commerciale,
              même partielle, de ces éléments sans l'autorisation écrite préalable de l'éditeur est
              strictement interdite et constituerait une contrefaçon sanctionnée par les lois applicables.
            </p>
            <p className="mt-3">
              L'utilisation du Service ne confère à l'utilisateur aucun droit de propriété sur les
              éléments du Service. Une licence d'utilisation personnelle, non exclusive, non transférable
              et révocable est accordée à l'utilisateur pour les seules fins d'utilisation du Service
              conformément aux présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Protection des données personnelles</h2>
            <p>
              Le traitement des données personnelles des utilisateurs est encadré par notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary underline">
                Politique de Confidentialité
              </Link>
              , conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679)
              et, le cas échéant, à la Loi fédérale suisse sur la Protection des Données (LPD,
              révisée en vigueur depuis le 1er septembre 2023).
            </p>
            <p className="mt-3">
              En utilisant le Service, vous consentez à la collecte et au traitement de vos données
              personnelles dans les conditions décrites dans notre Politique de Confidentialité.
              Vous disposez à tout moment d'un droit d'accès, de rectification, d'effacement,
              de portabilité et d'opposition que vous pouvez exercer à{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">info@platdujour.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Suspension et résiliation du compte</h2>
            <p>
              <strong>Par l'utilisateur :</strong> Tout utilisateur peut supprimer son compte à tout
              moment depuis les paramètres de l'application. La suppression entraîne l'effacement des
              données personnelles selon les durées prévues dans la Politique de Confidentialité.
              Les abonnements en cours ne sont pas remboursés sauf dans le cadre du droit de rétractation.
            </p>
            <p className="mt-3">
              <strong>Par l'éditeur :</strong> L'éditeur se réserve le droit de suspendre ou résilier
              un compte, avec ou sans préavis, en cas de :
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Violation des présentes CGU.</li>
              <li>Utilisation frauduleuse ou abusive du Service.</li>
              <li>Non-paiement d'un abonnement.</li>
              <li>Inactivité prolongée (plus de 24 mois consécutifs sans connexion).</li>
              <li>Demande d'une autorité judiciaire ou administrative compétente.</li>
            </ul>
            <p className="mt-3">
              En cas de résiliation pour faute grave, l'éditeur se réserve le droit de refuser toute
              nouvelle inscription de l'utilisateur concerné.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Force majeure</h2>
            <p>
              L'éditeur ne saurait être tenu responsable de tout retard ou inexécution de ses obligations
              résultant d'événements indépendants de sa volonté, incluant sans limitation : catastrophes
              naturelles, conflits armés, actes terroristes, défaillances des réseaux de
              télécommunications, pannes d'électricité, cyberattaques, décisions gouvernementales,
              épidémies ou pandémies. Dans de telles circonstances, les obligations de l'éditeur sont
              suspendues pendant la durée de l'événement. Si la situation persiste plus de 60 jours,
              l'une ou l'autre partie peut mettre fin au contrat sans indemnité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes CGU sont régies par le droit applicable dans le pays d'établissement de
              l'éditeur (voir les Mentions Légales). En cas de litige relatif à l'interprétation ou
              à l'exécution des présentes, les parties s'efforceront de trouver une solution amiable
              dans un délai de 30 jours à compter de la notification du différend.
            </p>
            <p className="mt-3">
              À défaut d'accord amiable, les tribunaux compétents seront ceux du ressort du siège
              social de l'éditeur. Les consommateurs résidant dans l'Union Européenne peuvent
              également recourir à la plateforme européenne de règlement en ligne des litiges (RLL)
              accessible à l'adresse : <span className="text-primary">https://ec.europa.eu/consumers/odr</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">14. Dispositions finales</h2>
            <p>
              Si l'une quelconque des dispositions des présentes CGU est déclarée nulle ou inapplicable
              par une juridiction compétente, les autres dispositions demeurent pleinement en vigueur.
              La nullité d'une clause n'entraîne pas la nullité de l'ensemble du contrat.
            </p>
            <p className="mt-3">
              Le fait pour l'éditeur de ne pas se prévaloir d'une disposition des présentes CGU ne
              saurait être interprété comme une renonciation à s'en prévaloir ultérieurement.
            </p>
            <p className="mt-3">
              Pour toute question relative aux présentes CGU, contactez-nous à :{" "}
              <a href="mailto:info@platdujour.ch" className="text-primary underline">
                info@platdujour.ch
              </a>
            </p>
          </section>

        </div>

        {/* ─── ENCART POINTS À COMPLÉTER ──────────────────────────────────────── */}
        <div className="mt-16 rounded-2xl border-2 border-dashed border-amber-400 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-amber-800 mb-1">
            ⚠️ Points à compléter par l'éditeur
          </h2>
          <p className="text-sm text-amber-700 mb-5">
            Ce document contient un contenu générique conforme au droit européen (RGPD, Directive
            2011/83/UE, DSA). Avant toute mise en ligne définitive, complétez ou vérifiez les points
            suivants selon la législation de votre pays d'établissement :
          </p>
          <ul className="space-y-3 text-sm text-amber-900">
            {[
              { label: "Identité et coordonnées de l'éditeur", detail: "Nom légal complet, forme juridique (SA, Sàrl, SAS…), capital social, numéro d'immatriculation (RC, SIRET, CHE…). À insérer dans les Mentions Légales liées depuis ces CGU." },
              { label: "Pays d'établissement et droit applicable", detail: "La loi applicable doit être précisée (droit suisse CO/LPD, droit français, belge…). Adaptez l'article 13 en conséquence." },
              { label: "Âge minimum légal", detail: "Vérifiez l'âge requis selon votre pays (16 ans en Suisse pour certains services numériques, 13 ou 16 ans selon les États membres UE)." },
              { label: "Modalités détaillées de paiement", detail: "Précisez les moyens de paiement acceptés (carte, TWINT, PayPal…), la devise (CHF / EUR), et la politique exacte de remboursement en cas de résiliation anticipée." },
              { label: "Fournisseur de paiement", detail: "Indiquez le nom du prestataire de paiement utilisé (Stripe, Mollie, Datatrans…) et ajoutez un lien vers ses conditions dans la section facturation." },
              { label: "Médiateur de la consommation (France/Belgique)", detail: "En France et en Belgique, l'indication d'un médiateur de la consommation agréé est obligatoire pour les professionnels. Indiquez son nom et son URL." },
              { label: "TVA sur les services numériques (UE)", detail: "En UE, les services numériques sont soumis à la TVA du pays du consommateur. Vérifiez votre obligation d'immatriculation TVA OSS auprès de l'administration fiscale." },
              { label: "Spécificités LPD suisse", detail: "Si établi en Suisse : la LPD révisée s'applique depuis sept. 2023. Remplacez les références RGPD par LPD/PFPDT si vous ne ciblez pas l'UE." },
              { label: "Conditions spécifiques restaurateurs", detail: "Si les restaurants ont des obligations contractuelles distinctes (commissions, délais de publication, exclusivité géographique…), rédigez des Conditions Générales Partenaires séparées." },
              { label: "DSA (Digital Services Act, UE)", detail: "Si votre plateforme dépasse 10 000 utilisateurs mensuels en UE, certaines obligations du DSA (transparence de la modération, signalement illicite…) s'appliquent dès 2024." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-amber-400 bg-white mt-0.5" />
                <span><strong>{item.label} :</strong> {item.detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-amber-600 italic">
            Ce document ne constitue pas un avis juridique. Nous vous recommandons de le faire valider
            par un juriste ou un avocat spécialisé avant publication.
          </p>
        </div>

      </main>

      <footer className="border-t border-black/5 mt-8 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Plat du Jour — Tous droits réservés ·{" "}
        <Link to="/politique-de-confidentialite" className="hover:text-primary">Politique de confidentialité</Link>{" "}·{" "}
        <Link to="/mentions-legales" className="hover:text-primary">Mentions légales</Link>
      </footer>
    </div>
  );
}
