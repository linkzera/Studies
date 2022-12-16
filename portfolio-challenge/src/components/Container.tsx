interface IContainer {
  children: React.ReactNode;
  className?: string;
}
export const Container = ({ children, className }: IContainer) => {
  return (
    <div
      className={[
        "flex flex-col bg-purple-300 rounded-3xl py-8 drop-shadow-lg",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
