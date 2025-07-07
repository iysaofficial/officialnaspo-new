import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ThankYouIndo() {
  const router = useRouter();
  const [params, setParams] = useState({
    namaLengkap: "",
    projectTitle: "",
    category: "",
    namasekolah: "",
  });

  useEffect(() => {
    if (!router.isReady) return;
    setParams({
      namaLengkap: router.query.namaLengkap || "No data available",
      projectTitle: router.query.projectTitle || "No data available",
      category: router.query.category || "No data available",
      namasekolah: router.query.namasekolah || "No data available",
    });
  }, [router.isReady, router.query]);

  return (
    <section className="thankyou">
      <div className="wrapper">
        <h1>Terima Kasih telah mendaftar!</h1>
        <p>Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.</p>

        <table className="thankyou-table">
          <tbody>
            <tr>
              <td><strong>Anggota Tim</strong></td>
              <td>{params.namaLengkap}</td>
            </tr>
            <tr>
              <td><strong>Nama Sekolah</strong></td>
              <td>{params.namasekolah}</td>
            </tr>
            <tr>
              <td><strong>Judul Proyek</strong></td>
              <td>{params.projectTitle}</td>
            </tr>
            <tr>
              <td><strong>Kategori Kompetisi</strong></td>
              <td>{params.category}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>*Jika data muncul, tangkap layar halaman ini sebagai bukti pendaftaran berhasil</strong>
        </p>
        <a href="/registration/homeindo" className="btn btn-action">
          Kembali ke menu pendaftaran
        </a>
      </div>
    </section>
  );
}
