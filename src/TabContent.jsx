// TabContent.jsx
import React from 'react';
import './TabContent.css'; // Import des styles CSS pour le fichier TabContent

function TabContent({ activeTab }) {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'APEGG':
        return (
          <div className="tab-content-item">
              <div className="APEGG-title"> Cabinet de conseil en  Transformation Digitale et de Transition Ecologique Globale</div>
              <p className="apegg-message">Notre expertise est à disposition de vos problématiques écologiques afin de bâtir ensemble un monde plus sain.</p>
          </div>
          
        );
      case 'Solutions':
        return (
          <div className="tab-content-item">
            <p>Contenu de l'onglet Solutions</p>
          </div>
        );
        case 'Expertise':
            return (
              <div className="tab-content-item">
                <div className="Expertise-title">Notre Expertise</div>
                    <p>
                        <strong>Transformation Digitale</strong>
                        <br/>
                        Nous proposons des stratégies sur mesure pour guider nos clients à travers leur transformation digitale, en optimisant leurs processus métier et en exploitant pleinement les technologies émergentes telles que l'IA, le cloud computing et l'IoT.
                        <br/>
                        <br/>
                        <strong>Ingénierie Data</strong>
                        <br/>
                        Grâce à notre expertise en analyse de données avancée et en science des données, nous aidons nos clients à tirer parti de leurs données pour prendre des décisions éclairées, améliorer leur efficacité opérationnelle et développer de nouveaux produits et services.
                        <br/>
                        <br/>
                        <strong>Énergie</strong>
                        <br/>
                        Nous travaillons avec nos clients pour concevoir et mettre en œuvre des solutions énergétiques durables, allant des énergies renouvelables à l'efficacité énergétique, afin de réduire leur empreinte carbone et de favoriser la transition vers une économie à faible émission de carbone.
                        <br/>
                        <br/>
                        <strong>Biotechnologie</strong>
                        <br/>
                        Dans le domaine de la santé, nous fournissons des solutions innovantes basées sur les données pour améliorer les soins de santé, optimiser les processus cliniques et promouvoir le bien-être des patients et des professionnels de la santé.
                        <br/>
                        <br/>
                        <strong>Environnement</strong>
                        <br/>
                        Nous nous engageons à protéger et à restaurer l'environnement en proposant des solutions d'ingénierie environnementale intégrées, visant à réduire la pollution, à préserver les ressources naturelles et à promouvoir la durabilité.         
                        <br/>
                        <br/>
                        <strong>Maintenance</strong>
                        <br/>
                         Enfin, notre expertise en maintenance permet à nos clients de garantir le bon fonctionnement de leurs infrastructures et équipements, en minimisant les temps d'arrêt, en optimisant les coûts et en prolongeant la durée de vie des actifs.
                   
                    </p>
              </div>
        );
      case 'Mission':
        return (
          <div className="tab-content-item">
            <div className="Mission-title">Notre Mission</div>
            <p>

             Au sein du paysage en constante évolution de la transformation digitale et de l'ingénierie pour la transition écologique, L'APEGG s'engage à fournir des solutions innovantes et durables pour répondre aux défis complexes de notre époque. Notre mission est d'accompagner nos clients dans leur parcours vers un avenir plus écologique, efficient et connecté                                                                                     </p>
           
             <p/>            
           </div>
        );
      case 'Engagement':
        return (
          <div className="tab-content-item">
            <div className="Engagement-title">Notre Engagement</div>
            <p>
            Chez l'APEEG,nous croyons en un avenir où la technologie et l'innovation sont mises au service de la durabilité et de la prospérité pour tous. Nous nous engageons à travailler en partenariat avec nos clients pour créer un impact positif sur la société et l'environnement, et à œuvrer ensemble pour une transition écologique globale réussie.
               
            </p>
          </div>
        );
      case 'Vision':
        return (
          <div className="tab-content-item">
            <div className="vision-title">Notre Vision</div>
            <p>
              <strong>Une Vision écologique enracinée dans l'Engagement et initiée par  par le Docteur Alain Pensé GAMASSA</strong>
              <br />
              Chez l'APEEG,nous croyons en un avenir où la technologie et l'innovation sont mises au service de la durabilité et de la prospérité pour tous. Nous nous engageons à travailler en partenariat avec nos clients pour créer un impact positif sur la société et l'environnement, et à œuvrer ensemble pour une transition écologique globale réussie.
              <br /> 
              <br /> 
              <strong>S'Engager dans une Quête Collective</strong>
              <br />
              Rejoignez-nous dans notre quête pour un avenir meilleur, où les valeurs d'innovation, de durabilité et d'engagement sont au cœur de chaque action. Ensemble, nous pouvons honorer l'héritage du Docteur Alain Pensé GAMASSA en laissant derrière nous un monde meilleur pour les générations futures.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tab-content">
      {renderTabContent()}
    </div>
  );
}

export default TabContent;

