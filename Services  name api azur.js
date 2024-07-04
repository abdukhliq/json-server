{   
  "name" : "A name for the skillset",  
  "description" : "Optionally, add a descriptive text.",   
  "skills" : [

    ],
  "cognitiveServices": 
      {
        "@odata.type": "#Microsoft.Azure.Search.CognitiveServicesByKey",
        "key": "<admin key>"
      },
  "knowledgeStore": { ... },
  "encryptionKey": { }
}

"skills":[
  {
    "@odata.type": "#Microsoft.Skills.Text.V3.EntityRecognitionSkill",
    "name": "Entity recognition",
    "context": "/document",
    "categories": [ "Organization" ],
    "inputs": [
      {
        "name": "text",
        "source": "/document/content"
      }
    ],
    "outputs": [
      {
        "name": "organizations",
        "targetName": "orgs"
      }
  },
  {
      "@odata.type": "#Microsoft.Skills.Vision.ImageAnalysisSkill",
      "name": "Image analysis",
      "context": "/document/normalized_images/*",
      "visualFeatures": [
          "brands"
      ],
      "inputs": [
          {
              "name": "image",
              "source": "/document/normalized_images/*"
          }
      ],
      "outputs": [
          {
              "name": "brands"
          }
      ]
  }
]
