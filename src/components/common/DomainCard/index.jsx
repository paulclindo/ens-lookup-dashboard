import { Card, Name, DescriptionList, Label, Value } from "./styles";

export default function DomainCard({ name, registrantAddress, ethAddress, registrationDate, expiryDate }) {
  return (
    <Card>
      <Name>{name ?? "-"}</Name>
      <DescriptionList>
        <div>
          <Label>Registrant Address</Label>
          <Value>{registrantAddress ?? "-"}</Value>
          <Label>Assigned ETH address</Label>
          <Value>{ethAddress ?? "-"}</Value>
        </div>
        <div>
          <Label>Registration date</Label>
          <Value>{registrationDate ?? "-"}</Value>
          <Label>Expiry date</Label>
          <Value>{expiryDate ?? "-"}</Value>
        </div>
      </DescriptionList>
    </Card>
  );
}
