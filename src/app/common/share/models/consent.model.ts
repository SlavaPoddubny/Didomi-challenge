export class Consent {
  name: string;
  email: string;
}

export class ConsentRead extends Consent {
  id: number;
  consentsGivenFor: string;
}

export class ConsentWrite extends Consent {
  consentsGivenFor: {label: string, checked: boolean}[];
}
