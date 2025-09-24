type MyButtonProps = {
  children: React.ReactNode;
};

export default function MyButton({ children }: MyButtonProps) {
  return (
    <button onClick={() => console.log('myButton was clicked!')}>
      {children}
    </button>
  );
}
