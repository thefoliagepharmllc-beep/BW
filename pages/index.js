import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BWELL</title>
        <meta name="description" content="Bwell wellness platform" />
      </Head>

      {/* 🌿 TOP SECTION (NEW) */}
      <div style={{
        padding: "40px 20px",
        textAlign: "center",
        background: "#f8f7f4"
      }}>
        <h1 style={{
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "10px"
        }}>
          Access real food, real care, and real knowledge
        </h1>

        <p style={{
          maxWidth: "600px",
          margin: "0 auto",
          color: "#555"
        }}>
          BWELL connects families with providers, educators, and wellness
          offerings in one place.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a
            href="#app"
            style={{
              background: "#047857",
              color: "white",
              padding: "12px 24px",
              borderRadius: "999px",
              textDecoration: "none"
            }}
          >
            Explore BWELL
          </a>
        </div>
      </div>

      {/* 🌿 APP CONTAINER (IMPROVED) */}
      <div
        id="app"
        style={{
          height: "90vh",
          width: "100%",
          borderTop: "1px solid #e5e5e5"
        }}
      >
        <iframe
          src="https://wellness-path-hub.base44.app"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
          }}
          title="BWELL"
        />
      </div>
    </>
  );
} 
