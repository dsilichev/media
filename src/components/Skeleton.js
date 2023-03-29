import classNames from "classnames";

function Skeleton({ times }) {
  // const boxes = [];

  // for (let i=0; i <= times; i++) {
  //   boxes.push(<div key={i}></div>)
  // }
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i}></div>;
    });
  return boxes;
}

export default Skeleton;
