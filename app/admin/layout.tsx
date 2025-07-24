import AdminNav from "../components/admin/AdminNav";
import AdminSidebar from "../components/admin/AdminSideBar";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <div className="bg-gray-100 ">
      {" "}
      <AdminNav />
      <main className={`flex min-h-[90vh] relative`}>
        <AdminSidebar />
        <div className="flex-1 mx-5 mt-5">{children}</div>{" "}
        <Link
          href="/admin/create"
          className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-yellow-600 hover:bg-yellow-50 transition-transform hover:scale-110"
        >
          <Plus size={32} />
        </Link>
      </main>
    </div>
  );
}
