const config = {
    "explorerConfig": [
      {
        "id": 1,
        "label": "data",
        "charts": {
          "sex": {
            "chartType": "bar",
            "title": "Sex"
          },
          "race": {
            "chartType": "bar",
            "title": "Race"
          },
          "ethnicity": {
            "chartType": "bar",
            "title": "Ethnicity"
          }
        },
        "filters": {
          "anchor": {
            "field": "disease_phase",
            "options": [
              "Initial Diagnosis",
              "Relapse"
            ],
            "tabs": [
              "Disease",
              "Molecular"
            ]
          },
          "tabs": [
            {
              "title": "Subject",
              "fields": [
                "consortium",
                "sex",
                "race",
                "ethnicity",
                "survival_characteristics.lkss",
                "survival_characteristics.age_at_lkss"
              ]
            },
            {
              "title": "Disease",
              "fields": [
                "histologies.histology",
                "tumor_assessments.age_at_tumor_assessment",
                "tumor_assessments.tumor_classification",
                "tumor_assessments.tumor_site",
                "tumor_assessments.longest_diam_dim1",
                "tumor_assessments.invasiveness",
                "tumor_assessments.nodal_clinical",
                "tumor_assessments.nodal_pathology",
                "tumor_assessments.parameningeal_extension",
                "stagings.irs_group",
                "stagings.tnm_finding"
              ]
            },
            {
              "title": "Molecular",
              "fields": [
                "molecular_analysis.anaplasia",
                "molecular_analysis.anaplasia_extent",
                "molecular_analysis.molecular_abnormality",
                "molecular_analysis.molecular_abnormality_result",
                "molecular_analysis.gene1",
                "molecular_analysis.gene2"
              ]
            }
          ]
        },
        "buttons": [
          {
            "enabled": true,
            "type": "data",
            "title": "Download Data",
            "leftIcon": "user",
            "rightIcon": "download",
            "fileName": "data.json",
            "tooltipText": "You can only download data accessible to you"
          }
        ],
        "table": {
          "enabled": true,
          "fields": [
            "external_references.external_links",
            "consortium",
            "data_contributor_id",
            "subject_submitter_id",
            "sex",
            "race",
            "ethnicity",
            "survival_characteristics.lkss",
            "survival_characteristics.age_at_lkss"
          ]
        },
        "patientIds": {
          "filter": false,
          "export": false
        },
        "survivalAnalysis": {
          "result": {
            "pval": false,
            "risktable": false,
            "survival": false
          }
        },
        "guppyConfig": {
          "dataType": "subject",
          "nodeCountTitle": "Subjects",
          "fieldMapping": [
            {
              "field": "survival_characteristics.lkss",
              "name": "Last Known Survival Status (LKSS)"
            },
            {
              "field": "survival_characteristics.age_at_lkss",
              "name": "Age at LKSS"
            },
            {
              "field": "external_references.external_resource_name",
              "name": "External Resource Name"
            },
            {
              "field": "tumor_assessments.age_at_tumor_assessment",
              "name": "Age at Tumor Assessment"
            },
            {
              "field": "tumor_assessments.tumor_classification",
              "name": "Tumor Classification"
            },
            {
              "field": "tumor_assessments.tumor_site",
              "name": "Tumor Site"
            },
            {
              "field": "tumor_assessments.tumor_size",
              "name": "Tumor Size"
            },
            {
              "field": "tumor_assessments.longest_diam_dim1",
              "name": "Longest Diam Dim 1"
            },
            {
              "field": "tumor_assessments.invasiveness",
              "name": "Invasiveness"
            },
            {
              "field": "tumor_assessments.nodal_clinical",
              "name": "Nodal Clinical"
            },
            {
              "field": "tumor_assessments.nodal_pathology",
              "name": "Nodal Pathology"
            },
            {
              "field": "tumor_assessments.parameningeal_extension",
              "name": "Parameningeal Extension"
            },
            {
              "field": "histologies.histology",
              "name": "Histology"
            },
            {
              "field": "histologies.histology_grade",
              "name": "Histology Grade"
            },
            {
              "field": "histologies.histology_inpc",
              "name": "Histology Inpc"
            },
            {
              "field": "molecular_analysis.anaplasia",
              "name": "Anaplasia"
            },
            {
              "field": "molecular_analysis.anaplasia_extent",
              "name": "Anaplasia Extent"
            },
            {
              "field": "molecular_analysis.molecular_abnormality",
              "name": "Molecular Abnormality"
            },
            {
              "field": "molecular_analysis.molecular_abnormality_result",
              "name": "Molecular Abnormality Result"
            },
            {
              "field": "molecular_analysis.gene1",
              "name": "Gene 1"
            },
            {
              "field": "molecular_analysis.gene2",
              "name": "Gene 2"
            },
            {
              "field": "project_id",
              "name": "Data Release Version"
            },
            {
              "field": "data_contributor_id",
              "name": "Data Contributor"
            },
            {
              "field": "stagings.irs_group",
              "name": "IRS Group"
            },
            {
              "field": "stagings.tnm_finding",
              "name": "TNM Finding"
            }
          ]
        },
        "dataRequests": {
          "enabled": true
        },
        "getAccessButtonLink": "https://pcdc-gen3-docs.s3.amazonaws.com/%5BDRAFT%5D+PCDC-request_form.docx"
      }
    ]
  };
  return {
    explorerConfig: config.explorerConfig,
  }