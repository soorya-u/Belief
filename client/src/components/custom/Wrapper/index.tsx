function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-6">
        {children}
      </main>
    </>
  );
}

export default Wrapper;
