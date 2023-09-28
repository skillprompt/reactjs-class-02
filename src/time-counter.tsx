export function TimeCounter(props: {
  countryName: string;
  timeZone: string;
  continent?: string;
}) {
  const time = new Date().getTime();

  // conditional rendering
  const valueToBeShownInContinentField = props.continent
    ? props.continent
    : "-";
  // if (props.continent) {
  //   valueToBeShownInContinentField = props.continent;
  // } else {
  //   valueToBeShownInContinentField = "-";
  // }

  return (
    <div
      style={{
        color: "#000",
        border: "1px solid #eee",
        margin: "10px",
      }}
    >
      <p>Country: {props.countryName}</p>
      <p>Timezone: {props.timeZone}</p>
      {props.continent ? (
        <p>Continent: {valueToBeShownInContinentField}</p>
      ) : null}
      <p>{time}</p>
    </div>
  );
}
