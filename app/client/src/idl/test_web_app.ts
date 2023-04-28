export type TestWebApp = {
  "version": "0.1.0",
  "name": "test_web_app",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "tweet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "body",
            "type": "string"
          },
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: TestWebApp = {
  "version": "0.1.0",
  "name": "test_web_app",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "tweet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "body",
            "type": "string"
          },
          {
            "name": "count",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
