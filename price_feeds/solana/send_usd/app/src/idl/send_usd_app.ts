export type SendUSDApp = {
  version: "0.1.0";
  name: "send_usd";
  instructions: [
    {
      name: "send";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "destination";
          isMut: true;
          isSigner: false;
          docs: ["CHECK : Just a destination"];
        },
        {
          name: "priceUpdate";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amountInUsd";
          type: "u64";
        }
      ];
    }
  ];
};

export const IDL: SendUSDApp = {
  version: "0.1.0",
  name: "send_usd",
  instructions: [
    {
      name: "send",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "destination",
          isMut: true,
          isSigner: false,
          docs: ["CHECK : Just a destination"],
        },
        {
          name: "priceUpdate",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amountInUsd",
          type: "u64",
        },
      ],
    },
  ],
};
