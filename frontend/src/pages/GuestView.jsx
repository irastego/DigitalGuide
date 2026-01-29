import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { propertyService } from '../services/api';

const GuestView = () => {
    const { slug } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        propertyService.getPropertyBySlug(slug)
            .then(res => {
                setProperty(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Greška:", err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <div className="p-10 text-center">Učitavam vodič...</div>;
    if (!property) return <div className="p-10 text-center">Vodič nije pronađen.</div>;

    return (
        <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-10">
            {/* Header sa imenom kuće */}
            <header className="bg-blue-600 text-white p-8 rounded-b-3xl shadow-lg">
                <h1 className="text-3xl font-bold">{property.name}</h1>
                <p className="opacity-80 mt-2">{property.address}</p>
            </header>

            <main className="p-4 space-y-6 -mt-4">
                {/* WiFi Sekcija - Najbitnije! */}
                <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-400">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        📶 WiFi Informacije
                    </h2>
                    <div className="mt-3 p-3 bg-gray-100 rounded-lg">
                        <p className="text-sm text-gray-500">Mreža:</p>
                        <p className="font-mono font-bold text-lg">{property.wifiSsid}</p>
                        <p className="text-sm text-gray-500 mt-2">Lozinka:</p>
                        <p className="font-mono font-bold text-lg">{property.wifiPassword}</p>
                    </div>
                </section>

                {/* Dinamičke upute (Roštilj, Smeće, itd.) */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold px-2">Korisne upute</h2>
                    {property.instructions?.map((inst) => (
                        <div key={inst.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-blue-600 text-lg mb-1">
                                {inst.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {inst.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Ovdje možemo dodati i preporuke kasnije... */}
            </main>
        </div>
    );
};

export default GuestView;