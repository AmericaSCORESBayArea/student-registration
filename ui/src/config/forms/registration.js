const registrationFormConfig = [
  {
    dataType: "title",
    formLabel: "!REGISTRATION_FORM_TITLE"
  },
  {
    dataType: "text",
    formValue: "FirstName",
    formLabel: "!REGISTRATION_FORM_FirstName_LABEL",
    helpText: "!REGISTRATION_FORM_FirstName_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_FirstName_PLACEHOLDER",
    isRequired: true
  },
  {
    dataType: "text",
    formValue: "MiddleName",
    formLabel: "!REGISTRATION_FORM_MiddleName_LABEL",
    helpText: "!REGISTRATION_FORM_MiddleName_HELPTEXT",
    isRequired: false,
    placeholder: "!REGISTRATION_FORM_MiddleName_PLACEHOLDER",
  },
  {
    dataType: "text",
    formValue: "LastName",
    formLabel: "!REGISTRATION_FORM_LastName_LABEL",
    helpText: "!REGISTRATION_FORM_LastName_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_LastName_PLACEHOLDER",
    isRequired: true
  },
  {
    dataType: "enum",
    formValue: "SchoolName",
    formLabel: "!REGISTRATION_FORM_SchoolName_LABEL",
    helpText: "!REGISTRATION_FORM_SchoolName_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_SchoolName_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    isRequired: true,
    enableSubFiltering: true,
    filterFields: [
      "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION"
    ],
    valueField: "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME",
    enumItems: [
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Daly City', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Jefferson Elementary School District'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Daly City', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Woodrow Wilson Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Daly City', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Panorama Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Burbank Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Cherryland Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'East Avenue Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Park Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Stonebrae Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Strobridge Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Cesar Chavez Middle School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'MLK Middle School Hayward'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Winton Middle School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Ochoa Middle School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bret Harte Hayward Middle School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Longwood Elementary School Hayward'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Palma Ceia Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Glassbrook Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Harder Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Tyrrell Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Fairview Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Treeview Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Schafer Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bowman Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Eldridge Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Faith Ringgold Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Ruus Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Southgate Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Lorin Eden Elementary School'},
      {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Hayward', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Eden Gardens Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Coliseum Collegiate Prep Academy'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Montera Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Westlake Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'ASCEND Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Esperanza Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Korematsu Discovery Academy'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Manzanita Community School & Manzanita SEED'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Elmhurst Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Global Family Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Howard Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Sankofa Academy'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Glenview Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Prescott Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Greenleaf Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'EnCompass Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bridges Academy Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'MLK Lafayette Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'International Community School & Think College Now'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Learning Without Limits Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bret Harte Oakland Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Madison Park Primary'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Futures Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Futures & Community United Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Oakland', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Life Academy'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Redwood City', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'John Gill Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Redwood City', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Hawes Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Redwood City', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Henry Ford Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Redwood City', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Adelante Selby Lane Elementary School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bessie Carmichael'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Redding Elementary School'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Garfield Elementary School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Up on Top - Program Site'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Sherman Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Moscone Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Tenderloin Community School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Salvation Army Kroc Center - Program Site'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'John Muir Elementary School'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'McCoppin Elementary School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Indochinese Housing Development Corporation - Lead Agency'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Indochinese Housing Development Center - Program Site'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Civic Center', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Cobb School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'El Dorado Elementary School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Francisco Middle School'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Herbert Hoover Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Kipp Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'San Francisco Community School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'TECA Middle School - Program Site'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Visitation Valley Middle School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Everett Middle School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'MLK Academic Middle School SF'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'KIPP SF Bay Academy Program Site'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'TECA Elementary School - Program Site'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Mission Education Center'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bryant Elementary School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Sanchez Elementary School'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Lakeshore Alternative Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Alvarado Elementary School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Marshall Elementary School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Flynn Elementary School'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Sunnyside Elementary School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Hillcrest Elementary School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bret Harte Elementary School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'ER Taylor Elementary School'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Monroe Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Guadalupe Elementary School'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Paul Revere Elementary School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Cleveland Elementary School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Junipero Serra Elementary'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Mission YMCA Learning Hub'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Paul Revere Middle School'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bret Harte'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'KIPP SF Bay Academy Lead Agency'},
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Willie Brown Middle School'
      },
      {
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER",
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Francisco Crocker',
        "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Joseph Lee Rec Center Bayview'
      },
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_PARK", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'San Rafael All Stars and Laureates'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Coleman Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Short Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Bahia Vista Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Venetia Valley K-8 School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'San Pedro Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Laurel Dell Elementary School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Rafael', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Davidson Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Jose', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Ocala Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Jose', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Franklin'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Jose', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'McKinley'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Jose', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Mathson Middle School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Jose', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Washington'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_SCHOOL", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'San Jose', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Cornerstone Elementary'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'Other', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'Test School'},
      // {"!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE": "!REGISTRATION_FORM_SchoolName_FIELD_SITE_TYPE_COMMUNITY_CENTER", "!REGISTRATION_FORM_SchoolName_FIELD_SITE_REGION": 'IFC-SF', "!REGISTRATION_FORM_SchoolName_FIELD_SITE_SCHOOL_NAME": 'IFC San Francisco'}
    ]
  },
  {
    dataType: "email",
    formValue: "PersonalEmail",
    formLabel: "!REGISTRATION_FORM_PersonalEmail_LABEL",
    helpText: "!REGISTRATION_FORM_PersonalEmail_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_PersonalEmail_PLACEHOLDER"
  },
  {
    dataType: "tel",
    formValue: "HomePhone",
    formLabel: "!REGISTRATION_FORM_HomePhone_LABEL",
    helpText: "!REGISTRATION_FORM_HomePhone_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_HomePhone_PLACEHOLDER",
  },
  {
    dataType: "date",
    formValue: "Birthdate",
    formLabel: "!REGISTRATION_FORM_Birthdate_LABEL",
    yearLabel:  "!REGISTRATION_FORM_Year_LABEL",
    monthLabel:  "!REGISTRATION_FORM_Month_LABEL",
    dayLabel:  "!REGISTRATION_FORM_Day_LABEL",
    helpText: "!REGISTRATION_FORM_Birthdate_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Birthdate_PLACEHOLDER",
    min: "1900-01-01",
    max: "2021-04-01",
    isRequired: true
  },
  {
    dataType: "buttonOptions",
    buttonOrientation:"vertical",
    formValue: "Gender",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_Gender_LABEL",
    helpText: "!REGISTRATION_FORM_Gender_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Gender_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_Gender_VALUE_MALE",
        value:"Male"
      },
      {
        displayValue:"!REGISTRATION_FORM_Gender_VALUE_FEMALE",
        value:"Female"
      },
      {
        displayValue:"!REGISTRATION_FORM_Gender_VALUE_NON_BINARY",
        value:"Non-binary"
      },
      {
        displayValue:"!REGISTRATION_FORM_Gender_VALUE_PREFER_NOT_TO_SAY",
        value:"Prefer not to say"
      }
    ]
  },
  {
    dataType: "buttonOptions",
    buttonOrientation:"vertical",
    formValue: "Grade",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_Grade_LABEL",
    helpText: "!REGISTRATION_FORM_Grade_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Grade_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_Grade_Kindergarten",
        value:"K"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_First",
        value:"1st"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_Second",
        value:"2nd"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_Third",
        value:"3rd"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_Fourth",
        value:"4th"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_Fifth",
        value:"5th"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_Sixth",
        value:"6th"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_Seventh",
        value:"7th"
      },
      {
        displayValue:"!REGISTRATION_FORM_Grade_Eighth",
        value:"8th"
      }
    ]
  },
  {
    dataType: "buttonOptions",
    buttonOrientation:"vertical",
    formValue: "Ethnicity",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_Ethnicity_LABEL",
    helpText: "!REGISTRATION_FORM_Ethnicity_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Ethnicity_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Hispanic_Latino",
        value:"Hispanic/Latinx"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Native_American",
        value:"Native American"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_African_American",
        value:"African American"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Pacific_Islander",
        value:"Pacific Islander"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Asian",
        value:"Asian"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Caucasian",
        value:"Caucasian"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Middle_Eastern_Arabic",
        value:"Middle Eastern/Arabic"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Multi_Racial_Multi_Ethnic",
        value:"Multi-Racial/Multi-Ethnic"
      },
      {
        displayValue:"!REGISTRATION_FORM_Ethnicity_Filipino",
        value:"Filipino"
      }
    ]
  },
  {
    dataType: "buttonOptions",
    formValue: "ReducedPriceLunch",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_ReducedPriceLunch_LABEL",
    helpText: "!REGISTRATION_FORM_ReducedPriceLunch_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_ReducedPriceLunch_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_YES",
        value:"Yes"
      },
      {
        displayValue:"!REGISTRATION_FORM_NO",
        value:"No"
      }
    ]
  },
  {
    dataType: "textArea",
    formValue: "Allergies",
    formLabel: "!REGISTRATION_FORM_Allergies_LABEL",
    helpText: "!REGISTRATION_FORM_Allergies_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Allergies_PLACEHOLDER",
  },
//{
//    dataType: "buttonOptions",
//    formValue: "PermissiontoCommuteAlone",
//    formLabel: "!REGISTRATION_FORM_PermissiontoCommuteAlone_LABEL",
//    helpText: "!REGISTRATION_FORM_PermissiontoCommuteAlone_HELPTEXT",
//    placeholder: "!REGISTRATION_FORM_PermissiontoCommuteAlone_PLACEHOLDER",
//    selectText: "!REGISTRATION_FORM_SELECT",
//    buttonItems: [
//      {
//        displayValue:"!REGISTRATION_FORM_YES",
//        value:"Yes"
//      },
//      {
//        displayValue:"!REGISTRATION_FORM_NO",
//        value:"No"
//      }
//    ]
//  },
  {
    dataType: "title",
    formLabel: "!REGISTRATION_FORM_ParentGuardianInformation_TITLE"
  },
  {
    dataType: "text",
    formValue: "ParentFName",
    formLabel: "!REGISTRATION_FORM_ParentFName_LABEL",
    helpText: "!REGISTRATION_FORM_ParentFName_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_ParentFName_PLACEHOLDER",
    isRequired: true
  },
  {
    dataType: "text",
    formValue: "ParentLName",
    formLabel: "!REGISTRATION_FORM_ParentLName_LABEL",
    helpText: "!REGISTRATION_FORM_ParentLName_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_ParentLName_PLACEHOLDER",
    isRequired: true
  },
  {
    dataType: "email",
    formValue: "ParentEmail",
    formLabel: "!REGISTRATION_FORM_ParentEmail_LABEL",
    helpText: "!REGISTRATION_FORM_ParentEmail_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_ParentEmail_PLACEHOLDER",
    isRequired: true
  },
  {
    dataType: "buttonOptions",
    buttonOrientation:"vertical",
    formValue: "Relationship",
    formLabel: "!REGISTRATION_FORM_Relationship_LABEL",
    helpText: "!REGISTRATION_FORM_Relationship_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Relationship_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_Parent",
        value:"Parent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_LegalGuardian",
        value:"Legal Guardian"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_FosterParent",
        value:"Foster Parent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_Grandparent",
        value:"Grandparent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_SiblingOrOtherRelative",
        value:"Sibling/Other Relative"
      }
    ]
  },
  {
    dataType: "tel",
    formValue: "ParentPhone1",
    formLabel: "!REGISTRATION_FORM_ParentPhone1_LABEL",
    helpText: "!REGISTRATION_FORM_ParentPhone1_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_ParentPhone1_PLACEHOLDER",
    isRequired: true
  },
  {
    dataType: "tel",
    formValue: "ParentPhone2",
    formLabel: "!REGISTRATION_FORM_ParentPhone2_LABEL",
    helpText: "!REGISTRATION_FORM_ParentPhone2_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_ParentPhone2_PLACEHOLDER",
  },
  {
    dataType: "text",
    formValue: "MailingStreet",
    formLabel: "!REGISTRATION_FORM_MailingStreet_LABEL",
    helpText: "!REGISTRATION_FORM_MailingStreet_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_MailingStreet_PLACEHOLDER",
  },
  {
    dataType: "text",
    formValue: "MailingCity",
    formLabel: "!REGISTRATION_FORM_MailingCity_LABEL",
    helpText: "!REGISTRATION_FORM_MailingCity_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_MailingCity_PLACEHOLDER",
  },
  {
    dataType: "text",
    formValue: "MailingState",
    formLabel: "!REGISTRATION_FORM_MailingState_LABEL",
    helpText: "!REGISTRATION_FORM_MailingState_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_MailingState_PLACEHOLDER",
  },
  {
    dataType: "number",
    formValue: "MailingZip",
    formLabel: "!REGISTRATION_FORM_MailingZip_LABEL",
    helpText: "!REGISTRATION_FORM_MailingZip_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_MailingZip_PLACEHOLDER",
  },
  {
    dataType: "static",
    formValue: "MailingCountry",
    staticValue: "US",
    formLabel: "!REGISTRATION_FORM_MailingCountry_LABEL"
  },
  {
    dataType: "enum",
    formValue: "ParentHomeLang",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_ParentHomeLang_LABEL",
    helpText: "!REGISTRATION_FORM_ParentHomeLang_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_ParentHomeLang_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    enumItems: [
      "!REGISTRATION_FORM_ParentHomeLang_English",
      "!REGISTRATION_FORM_ParentHomeLang_Spanish",
      "!REGISTRATION_FORM_ParentHomeLang_Chinese",
      "!REGISTRATION_FORM_ParentHomeLang_Arabic",
      "!REGISTRATION_FORM_ParentHomeLang_Bengali",
      "!REGISTRATION_FORM_ParentHomeLang_French",
      "!REGISTRATION_FORM_ParentHomeLang_German",
      "!REGISTRATION_FORM_ParentHomeLang_Greek",
      "!REGISTRATION_FORM_ParentHomeLang_Gujrati",
      "!REGISTRATION_FORM_ParentHomeLang_Hebrew",
      "!REGISTRATION_FORM_ParentHomeLang_Hindi",
      "!REGISTRATION_FORM_ParentHomeLang_Hmong",
      "!REGISTRATION_FORM_ParentHomeLang_Italian",
      "!REGISTRATION_FORM_ParentHomeLang_Japanese",
      "!REGISTRATION_FORM_ParentHomeLang_Korean",
      "!REGISTRATION_FORM_ParentHomeLang_Punjabi",
      "!REGISTRATION_FORM_ParentHomeLang_Persian",
      "!REGISTRATION_FORM_ParentHomeLang_Polish",
      "!REGISTRATION_FORM_ParentHomeLang_Portuguese",
      "!REGISTRATION_FORM_ParentHomeLang_Russian",
      "!REGISTRATION_FORM_ParentHomeLang_Tagalog",
      "!REGISTRATION_FORM_ParentHomeLang_Telugu",
      "!REGISTRATION_FORM_ParentHomeLang_Urdu",
      "!REGISTRATION_FORM_ParentHomeLang_Vietnamese",
      "!REGISTRATION_FORM_ParentHomeLang_Other"
    ],
    fillInOptionValues: [
      "!REGISTRATION_FORM_ParentHomeLang_Other"
    ],
    fillInOptionFormValueOverride: "OtherLang"
  },
  {
    dataType: "buttonOptions",
    formValue: "Volunteer",
    formLabel: "!REGISTRATION_FORM_Volunteer_LABEL",
    helpText: "!REGISTRATION_FORM_Volunteer_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Volunteer_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_YES",
        value:"Yes"
      },
      {
        displayValue:"!REGISTRATION_FORM_NO",
        value:"No"
      }
    ]
  },
  {
    dataType: "title",
    formLabel: "!REGISTRATION_FORM_Emergency_Contact_TITLE"
  },
  {
    dataType: "text",
    formValue: "Emergency_Contact_Name",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_Emergency_Contact_Name_LABEL",
    helpText: "!REGISTRATION_FORM_Emergency_Contact_Name_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Emergency_Contact_Name_PLACEHOLDER",
  },
  {
    dataType: "buttonOptions",
    buttonOrientation:"vertical",
    formValue: "Emergency_Contact_Relationship",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_Emergency_Contact_Relationship_LABEL",
    helpText: "!REGISTRATION_FORM_Emergency_Contact_Relationship_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Emergency_Contact_Relationship_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_Parent",
        value:"Parent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_LegalGuardian",
        value:"Legal Guardian"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_FosterParent",
        value:"Foster Parent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_Grandparent",
        value:"Grandparent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_SiblingOrOtherRelative",
        value:"Sibling/Other Relative"
      }
    ]
  },
  {
    dataType: "tel",
    formValue: "Emergency_Contact_Phone1",
    isRequired: true,
    formLabel: "!REGISTRATION_FORM_Emergency_Contact_Phone1_LABEL",
    helpText: "!REGISTRATION_FORM_Emergency_Contact_Phone1_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Emergency_Contact_Phone1_PLACEHOLDER",
  },
  {
    dataType: "tel",
    formValue: "Emergency_Contact_Phone2",
    formLabel: "!REGISTRATION_FORM_Emergency_Contact_Phone2_LABEL",
    helpText: "!REGISTRATION_FORM_Emergency_Contact_Phone2_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Emergency_Contact_Phone2_PLACEHOLDER",
  },
  {
    dataType: "title",
    formLabel: "!REGISTRATION_FORM_Second_Emergency_Contact_TITLE"
  },
  {
    dataType: "text",
    formValue: "Second_Emergency_Contact_Name",
    formLabel: "!REGISTRATION_FORM_Second_Emergency_Contact_Name_LABEL",
    helpText: "!REGISTRATION_FORM_Second_Emergency_Contact_Name_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Second_Emergency_Contact_Name_PLACEHOLDER",
  },
  {
    dataType: "buttonOptions",
    buttonOrientation:"vertical",
    formValue: "Second_Emergency_Contact_Relationship",
    formLabel: "!REGISTRATION_FORM_Second_Emergency_Contact_Relationship_LABEL",
    helpText: "!REGISTRATION_FORM_Second_Emergency_Contact_Relationship_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Second_Emergency_Contact_Relationship_PLACEHOLDER",
    selectText: "!REGISTRATION_FORM_SELECT",
    buttonItems: [
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_Parent",
        value:"Parent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_LegalGuardian",
        value:"Legal Guardian"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_FosterParent",
        value:"Foster Parent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_Grandparent",
        value:"Grandparent"
      },
      {
        displayValue:"!REGISTRATION_FORM_Relationship_VALUE_SiblingOrOtherRelative",
        value:"Sibling/Other Relative"
      }
    ]
  },
  {
    dataType: "tel",
    formValue: "Second_Emergency_Contact_Phone1",
    formLabel: "!REGISTRATION_FORM_Second_Emergency_Contact_Phone1_LABEL",
    helpText: "!REGISTRATION_FORM_Second_Emergency_Contact_Phone1_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Second_Emergency_Contact_Phone1_PLACEHOLDER",
  },
  {
    dataType: "tel",
    formValue: "Second_Emergency_Contact_Phone2",
    formLabel: "!REGISTRATION_FORM_Second_Emergency_Contact_Phone2_LABEL",
    helpText: "!REGISTRATION_FORM_Second_Emergency_Contact_Phone2_HELPTEXT",
    placeholder: "!REGISTRATION_FORM_Second_Emergency_Contact_Phone2_PLACEHOLDER",
  }
];

export default registrationFormConfig;
