export default function LoadingSection({ loading }) {
  return (
    <>
      {loading ? (
        <div className="loading-section">
          <spa className="loader"></spa>
          Loading Data...
        </div>
      ) : null}
    </>
  );
}
