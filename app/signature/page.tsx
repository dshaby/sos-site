import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Signature Preview",
  description: "Temporary email signature preview page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignaturePage() {
  return (
    <main style={{ margin: "24px", background: "#ffffff" }}>
      <table
        cellPadding={0}
        cellSpacing={0}
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#1f2937",
          lineHeight: 1.4,
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          <tr>
            <td style={{ fontSize: "16px", fontWeight: 700 }}>Ron Shaby</td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px", color: "#4b5563" }}>
              Owner, SOS Standing Ovation Surround Sound
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: "6px", fontSize: "13px" }}>
              <a
                href="tel:+18182573732"
                style={{ color: "#111827", textDecoration: "none" }}
              >
                (818) 257-3732
              </a>{" "}
              |{" "}
              <a
                href="mailto:info@laproav.com"
                style={{ color: "#111827", textDecoration: "none" }}
              >
                info@laproav.com
              </a>{" "}
              |{" "}
              <a
                href="https://laproav.com"
                style={{ color: "#111827", textDecoration: "none" }}
              >
                laproav.com
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "12px", color: "#6b7280", paddingTop: "4px" }}>
              Licensed &amp; Bonded • CA License #895999
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "12px", color: "#6b7280", paddingTop: "3px" }}>
              Recent projects:{" "}
              <a
                href="https://laproav.com/gallery"
                style={{ color: "#111827", textDecoration: "none" }}
              >
                laproav.com/gallery
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: "10px" }}>
              <img
                src="https://laproav.com/logo.png"
                alt="SOS Standing Ovation"
                width={220}
                style={{
                  display: "block",
                  border: 0,
                  maxWidth: "220px",
                  height: "auto",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
