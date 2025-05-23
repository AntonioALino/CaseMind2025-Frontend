import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { ImageFromData } from "../components/ImagesComponent/ImagesConverter";
import { useParams } from "react-router-dom";

export const PerfilPage: React.FC = () => {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [profileImageBase64, setProfileImageBase64] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("authtoken");

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        setName(res.data.name || "");
        setProfileImageBase64(res.data.image || null);
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
      }
    };

    loadProfile();
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setImageFile(file);
    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Preencha o nome.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name.trim());

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      

      await api.patch("/profile", formData, {
        headers: {
        Authorization: `Bearer ${token}`,
                       "Content-Type": "multipart/form-data"
                }
});

      alert("Perfil salvo com sucesso!");

      const res = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(res.data.name || "");
      setProfileImageBase64(res.data.image || null);
      setImageFile(null);
      setPreviewUrl(null);
    } catch (err) {
      console.error("Erro ao salvar perfil:", err);
      alert("Erro ao salvar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl flex gap-8">
        <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold">Editar Perfil</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Imagem de Perfil</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 rounded text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } transition`}
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </form>

        <div className="w-1/3 flex items-center justify-center">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-full border"
            />
          ) : profileImageBase64 ? (
            <ImageFromData
              data={profileImageBase64}
              alt="Imagem de Perfil"
              className="w-40 h-40 object-cover rounded-full border"
            />
          ) : (
            <div className="w-40 h-40 bg-gray-200 flex items-center justify-center text-gray-500 rounded-full">
              Sem imagem
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
