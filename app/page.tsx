export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Plavi Oblutak d.o.o.</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Stručnjaci za sanacije, restauracije i izgradnju stambenih i gospodarskih objekata.
      </p>
      <img
        src="/images/stories/logo.png"
        alt="Plavi Oblutak Logo"
        className="mt-8 w-72 md:w-96"
      />
    </div>
  );
}
