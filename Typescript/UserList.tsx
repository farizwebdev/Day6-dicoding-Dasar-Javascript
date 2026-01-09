import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 1. Definisikan Tipe Data (TypeScript Interface)
// Ini biar kita tau data yang masuk bentuknya kayak apa (Safety)
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

const UserList = () => {
  // 2. State Management (Simpan Data, Loading, & Error)
  // <User[]> artinya: State ini isinya WAJIB array dari User
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Fungsi Fetch API dengan Axios
  const fetchData = async () => {
    try {
      // Reset error dulu sebelum panggil
      setError(null);
      
      // Panggil API (Contoh pakai JSONPlaceholder)
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      
      // Simpan data ke state
      setUsers(response.data);
    } catch (err) {
      // Tangkap error jika API gagal / internet mati
      setError("Gagal mengambil data user. Cek koneksi internet.");
      console.error(err);
    } finally {
      // Mau sukses atau gagal, loading harus berhenti
      setIsLoading(false);
    }
  };

  // 4. useEffect: Jalankan fungsi saat pertama kali halaman dibuka
  useEffect(() => {
    fetchData();
  }, []);

  // 5. Tampilan (UI) berdasarkan kondisi
  if (isLoading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Daftar Pengguna (Fetch Axios)</h2>
      <ul>
        {users.map((user) => (
          // Karena pakai TypeScript, kita dapet autocompletion di sini (user.name, user.email)
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.name}</strong> <br />
            <span>Email: {user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;