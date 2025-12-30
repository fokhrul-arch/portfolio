export default function DownloadCVButton() {
  return (
    <a
      href="/public/Md-CV.pdf"
      download
      className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      Download CV
    </a>
  );
}
