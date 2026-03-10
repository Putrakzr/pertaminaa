const fs = require('fs');
const path = 'pertamina/src/app/admin/users/page.tsx';
const content = `'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import toast from "react-hot-toast";

interface User {
  id: number;
  nama: string;
  email: string;
  jabatan: string;
  lokasiSite: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  
}
`;
fs.writeFileSync(path, content);
console.log("File written successfully");
