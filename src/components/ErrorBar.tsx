const ErrorBar = (props: any) => {
  return (
    <section className="py-2 px-4 w-full bg-red-500 text-white rounded-xl mt-2">
      {props.children}
    </section>
  );
};

ErrorBar.defaultProps = {
  children: <></>,
};

export default ErrorBar;
