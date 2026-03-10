import { Link } from "react-router-dom";
import logo from "../assets/Logomascotte.svg";

const LAST_UPDATE = "Mars 2025";

export default function Cgu() {
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
          Conditions Générales d'Utilisation
        </h1>
        <p className="text-sm text-gray-400 mb-10">Dernière mise à jour : {LAST_UPDATE}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-sm sm:text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Présentation du service</h2>
            <p>
              L'application <strong>Plat du Jour</strong> (ci-après « le Service ») est une plateforme
              mobile permettant aux utilisateurs de découvrir les menus du jour proposés par des
              restaurants partenaires, de consulter les prix, de réserver une table et, le cas échéant,
              de passer commande. Le Service est édité par la société dont les coordonnées figurent dans
              les Mentions Légales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Acceptation des CGU</h2>
            <p>
              L'utilisation du Service implique l'acceptation pleine et entière des présentes Conditions
              Générales d'Utilisation (CGU). Si vous n'acceptez pas ces conditions, vous devez cesser
              d'utiliser le Service. Ces CGU peuvent être modifiées à tout moment ; la version en vigueur
              est celle publiée sur le Service à la date de votre connexion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accès au service et inscription</h2>
            <p>
              Le Service est accessible gratuitement à toute personne disposant d'un accès à Internet.
              Certaines fonctionnalités (réservation, favoris, avis) nécessitent la création d'un compte.
              L'utilisateur s'engage à fournir des informations exactes lors de l'inscription et à maintenir
              ces informations à jour. Tout compte peut être supprimé par l'utilisateur à tout moment depuis
              les paramètres de l'application.
            </p>
            <p className="mt-2">
              Le Service est réservé aux personnes majeures ou ayant obtenu l'autorisation d'un représentant
              légal conformément à la législation de leur pays de résidence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Offres Premium et facturation</h2>
            <p>
              Des abonnements payants (« Premium ») sont proposés aux utilisateurs et aux restaurateurs.
              Les tarifs en vigueur sont affichés dans la section Tarifs de l'application. Tout abonnement
              est conclu pour la durée choisie (mensuelle ou annuelle) et se renouvelle automatiquement
              sauf résiliation avant la date d'échéance. L'utilisateur peut résilier à tout moment depuis
              son espace personnel ; la résiliation prendra effet à la fin de la période en cours.
            </p>
            <p className="mt-2">
              Conformément au droit européen (Directive 2011/83/UE), l'utilisateur bénéficie d'un droit
              de rétractation de <strong>14 jours</strong> à compter de la souscription, sauf si le service
              numérique a commencé à être exécuté avec son accord préalable exprès.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Responsabilités des utilisateurs</h2>
            <p>L'utilisateur s'engage à :</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
              <li>Ne pas utiliser le Service à des fins illicites ou frauduleuses.</li>
              <li>Ne pas publier de contenu (avis, photos) trompeur, offensant ou portant atteinte aux droits de tiers.</li>
              <li>Ne pas tenter de contourner les mesures de sécurité du Service.</li>
              <li>Respecter les conditions de réservation imposées par les restaurants partenaires.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Responsabilités de l'éditeur</h2>
            <p>
              L'éditeur s'efforce d'assurer la disponibilité et la fiabilité du Service mais ne garantit pas
              une disponibilité ininterrompue. Les informations sur les menus et les prix sont publiées par
              les restaurants partenaires ; l'éditeur ne saurait être tenu responsable d'erreurs ou d'omissions
              dans ces informations. En cas de litige avec un restaurant partenaire, l'éditeur peut servir
              d'intermédiaire sans être partie prenante au contrat entre l'utilisateur et le restaurant.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments du Service (marque, logo, textes, design, code source) est la propriété
              exclusive de l'éditeur ou de ses partenaires et est protégé par les lois relatives à la propriété
              intellectuelle. Toute reproduction, même partielle, sans autorisation écrite préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Protection des données personnelles</h2>
            <p>
              Le traitement des données personnelles des utilisateurs est décrit dans notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary underline">
                Politique de Confidentialité
              </Link>
              , conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes CGU sont régies par le droit applicable dans le pays d'établissement de l'éditeur.
              En cas de litige non résolu à l'amiable, les tribunaux compétents seront ceux du ressort du siège
              social de l'éditeur. Les consommateurs résidant dans l'Union Européenne peuvent également recourir
              à la plateforme de règlement en ligne des litiges de la Commission Européenne.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
            <p>
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
            Ce document contient un contenu générique conforme au droit européen (RGPD, Directive Services).
            Avant toute mise en ligne définitive, complétez ou vérifiez les points suivants selon la
            législation de votre pays d'établissement :
          </p>
          <ul className="space-y-3 text-sm text-amber-900">
            {[
              { label: "Identité de l'éditeur", detail: "Nom légal complet, forme juridique (SA, Sàrl, SAS…), capital social, numéro d'immatriculation (RC, SIRET, CHE…)." },
              { label: "Siège social", detail: "Adresse complète de l'établissement principal." },
              { label: "Pays d'établissement", detail: "La loi applicable doit être précisée (droit suisse, français, belge…). Adaptez l'article 9 en conséquence." },
              { label: "Âge minimum légal", detail: "Vérifiez l'âge requis selon votre pays (16 ans en Suisse pour certains services, 13 ans en UE hors RGPD enfants, etc.)." },
              { label: "Modalités de paiement & remboursement", detail: "Précisez les moyens de paiement acceptés et la politique de remboursement en cas de résiliation anticipée." },
              { label: "Médiateur de la consommation (France/Belgique)", detail: "En France et en Belgique, l'indication d'un médiateur de la consommation agréé est obligatoire." },
              { label: "TVA sur les services numériques", detail: "En UE, les services numériques sont soumis à la TVA du pays du consommateur. Vérifiez votre obligation d'immatriculation TVA OSS." },
              { label: "Spécificités suisses", detail: "Si établi en Suisse : référence à la LPD (Loi sur la Protection des Données) en vigueur depuis sept. 2023, pas de RGPD obligatoire sauf si ciblage UE." },
              { label: "Contenu publié par les restaurants", detail: "Définissez clairement les responsabilités des partenaires restaurateurs (charte partenaire, conditions distinctes)." },
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
