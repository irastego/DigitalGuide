import React, { useState } from 'react';
import { propertyService } from '../services/api';

const AddProperty = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        description: '',
        slug: '',
        wifiSsid: '',
        wifiPassword: ''
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await propertyService.createProperty(formData);
            alert("Uspješno spremljeno! ID: " + response.data.id);
        } catch (error) {
            console.error("Greška pri spremanju:", error);
            alert("Došlo je do greške.");
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Dodaj novi objekt</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" placeholder="Ime objekta" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="address" placeholder="Adresa" onChange={handleChange} className="w-full p-2 border rounded" />
                <textarea name="description" placeholder="Opis" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="slug" placeholder="Slug (npr. apartman-riva)" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="wifiSsid" placeholder="WiFi Naziv" onChange={handleChange} className="w-full p-2 border rounded" />
                <input name="wifiPassword" placeholder="WiFi Lozinka" onChange={handleChange} className="w-full p-2 border rounded" />
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    Spremi u bazu
                </button>
            </form>
        </div>
    );
};

export default AddProperty;