const User = (props: { "a:b": string }) => {
  return <div>{props["a:b"]}</div>;
};

const userComp = <User a : b={"Alex"} />;
