// pages/notre-equipe.tsx
import React from "react";
import Head from "next/head";

const NotreEquipePage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Directeur Général",
      bio: "Avec plus de 15 ans d'expérience dans la logistique industrielle, Jean pilote la stratégie de développement de l'entreprise.",
      img: "/images/jean.jpg",
    },
    {
      id: 2,
      name: "Marie Lambert",
      role: "Assistante administrative",
      bio: "Gestionnaire organisée et efficace, elle assure le bon fonctionnement quotidien de nos services administratifs et logistiques.",
      img: "/images/employe2.jpg",
    },
    {
      id: 3,
      name: "Thomas Martin",
      role: "Responsable logistique",
      bio: "Expert en planification des flux, il coordonne nos opérations de transport pour garantir des livraisons optimales et ponctuelles.",
      img: "/images/employe1.jpg",
    },
    {
      id: 4,
      name: "Antoine Dubois",
      role: "Agent logistique",
      bio: "Opérateur terrain méticuleux, il veille au chargement et à la sécurisation des marchandises selon les normes en vigueur.",
      img: "/images/employe3.jpg",
    },
    {
      id: 5,
      name: "David Kwame",
      role: "Responsable Flotte",
      bio: "Expert en gestion de flotte et maintenance. Garantit la sécurité de nos véhicules.",
      img: "/images/david.jpg",
    },
    {
      id: 6,
      name: "Fatoumata Diallo",
      role: "Responsable Clients",
      bio: "S'assure que chaque client bénéficie d'un service personnalisé.",
      img: "/images/diallo.jpg",
    },
    {
      id: 7,
      name: "Marc Johnson",
      role: "Ingénieur Industriel",
      bio: "Conçoit nos solutions techniques les plus innovantes.",
      img: "/images/marc.jpg",
    },
    {
      id: 8,
      name: "Aïcha Benali",
      role: "Responsable RH",
      bio: "Veille à l'épanouissement professionnel de notre équipe.",
      img: "/images/benali.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Notre Équipe - Global Solution & Services</title>
        <meta
          name="description"
          content="Découvrez l'équipe passionnée qui fait la force de Global Solution & Services"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[90vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('images/grpe2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "90vh",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b314e] to-transparent opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Rencontrez notre équipe
          </h1>
          <p className="text-xl max-w-2xl">
            Des experts passionnés dédiés à l&#39;excellence de vos opérations
            logistiques
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1b314e] mb-4">
              L&#39;équipe derrière notre succès
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les talents qui transforment chaque jour les défis
              logistiques en opportunités
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
              >
                <div
                  className="relative h-72"
                  style={{
                    backgroundImage: `url(${member.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "50vh",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b314e] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1b314e]">
                    {member.name}
                  </h3>
                  <p className="text-[#d32a2b] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NotreEquipePage;
