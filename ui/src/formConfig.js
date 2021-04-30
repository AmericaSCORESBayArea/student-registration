const formConfig = [
  {
    dataType:"title",
    formLabel:"Student Details"
  },
  {
    dataType:"text",
    formValue:"FirstName",
    formLabel:"First Name",
    helpText:"Enter First Name",
    placeholder:"Enter First Name",
    isRequired: true
  },
  {
    dataType:"text",
    formValue:"MiddleName",
    formLabel:"Middle Name",
    helpText:"Enter Middle Name",
    isRequired:false,
    placeholder:"Enter Middle Name"
  },
  {
    dataType:"text",
    formValue:"LastName",
    formLabel:"Last Name",
    helpText:"Enter Last Name",
    placeholder:"Enter Last Name",
    isRequired: true
  },
  {
    dataType: "enum",
    formValue: "SchoolName",
    formLabel: "School Name",
    helpText: "Select School Name",
    placeholder: "Enter School Name",
    isRequired: true,
    enableSubFiltering: true,
    filterFields: [
      "Site  Type",
      "Region"
    ],
    valueField: "School Name",
    enumItems: [
      {"Site  Type": 'School', "Region": 'Daly City', "School Name": 'Jefferson Elementary School District'},
      {"Site  Type": 'School', "Region": 'Daly City', "School Name": 'Woodrow Wilson Elementary School'},
      {"Site  Type": 'School', "Region": 'Daly City', "School Name": 'Panorama Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Burbank Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Cherryland Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'East Avenue Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Park Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Stonebrae Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Strobridge Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Cesar Chavez Middle School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'MLK Middle School Hayward'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Winton Middle School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Ochoa Middle School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Bret Harte Hayward Middle School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Longwood Elementary School Hayward'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Palma Ceia Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Glassbrook Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Harder Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Tyrrell Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Fairview Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Treeview Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Schafer Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Bowman Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Eldridge Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Faith Ringgold Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Ruus Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Southgate Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Lorin Eden Elementary School'},
      {"Site  Type": 'School', "Region": 'Hayward', "School Name": 'Eden Gardens Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Coliseum Collegiate Prep Academy'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Montera Middle School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Westlake Middle School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'ASCEND Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Esperanza Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Korematsu Discovery Academy'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Manzanita Community School & Manzanita SEED'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Elmhurst Middle School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Global Family Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Howard Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Sankofa Academy'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Glenview Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Prescott Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Greenleaf Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'EnCompass Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Bridges Academy Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'MLK Lafayette Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'International Community School & Think College Now'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Learning Without Limits Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Bret Harte Oakland Middle School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Madison Park Primary'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Futures Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Futures & Community United Elementary School'},
      {"Site  Type": 'School', "Region": 'Oakland', "School Name": 'Life Academy'},
      {"Site  Type": 'School', "Region": 'Redwood City', "School Name": 'John Gill Elementary School'},
      {"Site  Type": 'School', "Region": 'Redwood City', "School Name": 'Hawes Elementary School'},
      {"Site  Type": 'School', "Region": 'Redwood City', "School Name": 'Henry Ford Elementary School'},
      {"Site  Type": 'School', "Region": 'Redwood City', "School Name": 'Adelante Selby Lane Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'Bessie Carmichael'},
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'Redding Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'Garfield Elementary School'},
      {"Site  Type": 'Community Center', "Region": 'San Francisco Civic Center', "School Name": 'Up on Top - Program Site'},
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'Sherman Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'Moscone Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'Tenderloin Community School'},
      {
        "Site  Type": 'Community Center',
        "Region": 'San Francisco Civic Center',
        "School Name": 'Salvation Army Kroc Center - Program Site'
      },
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'John Muir Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'McCoppin Elementary School'},
      {
        "Site  Type": 'Community Center',
        "Region": 'San Francisco Civic Center',
        "School Name": 'Indochinese Housing Development Corporation - Lead Agency'
      },
      {
        "Site  Type": 'Community Center',
        "Region": 'San Francisco Civic Center',
        "School Name": 'Indochinese Housing Development Center - Program Site'
      },
      {"Site  Type": 'School', "Region": 'San Francisco Civic Center', "School Name": 'Cobb School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'El Dorado Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Francisco Middle School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Herbert Hoover Middle School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Kipp Middle School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'San Francisco Community School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'TECA Middle School - Program Site'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Visitation Valley Middle School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Everett Middle School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'MLK Academic Middle School SF'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'KIPP SF Bay Academy Program Site'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'TECA Elementary School - Program Site'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Mission Education Center'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Bryant Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Sanchez Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Lakeshore Alternative Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Alvarado Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Marshall Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Flynn Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Sunnyside Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Hillcrest Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Bret Harte Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'ER Taylor Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Monroe Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Guadalupe Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Paul Revere Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Cleveland Elementary School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Junipero Serra Elementary'},
      {"Site  Type": 'Community Center', "Region": 'San Francisco Crocker', "School Name": 'Mission YMCA Learning Hub'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Paul Revere Middle School'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Bret Harte'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'KIPP SF Bay Academy Lead Agency'},
      {"Site  Type": 'School', "Region": 'San Francisco Crocker', "School Name": 'Willie Brown Middle School'},
      {"Site  Type": 'Community Center', "Region": 'San Francisco Crocker', "School Name": 'Joseph Lee Rec Center Bayview'},
      {"Site  Type": 'Park', "Region": 'San Rafael', "School Name": 'San Rafael All Stars and Laureates'},
      {"Site  Type": 'School', "Region": 'San Rafael', "School Name": 'Coleman Elementary School'},
      {"Site  Type": 'School', "Region": 'San Rafael', "School Name": 'Short Elementary School'},
      {"Site  Type": 'School', "Region": 'San Rafael', "School Name": 'Bahia Vista Elementary School'},
      {"Site  Type": 'School', "Region": 'San Rafael', "School Name": 'Venetia Valley K-8 School'},
      {"Site  Type": 'School', "Region": 'San Rafael', "School Name": 'San Pedro Elementary School'},
      {"Site  Type": 'School', "Region": 'San Rafael', "School Name": 'Laurel Dell Elementary School'},
      {"Site  Type": 'School', "Region": 'San Rafael', "School Name": 'Davidson Middle School'},
      {"Site  Type": 'School', "Region": 'San Jose', "School Name": 'Ocala Middle School'},
      {"Site  Type": 'School', "Region": 'San Jose', "School Name": 'Franklin'},
      {"Site  Type": 'School', "Region": 'San Jose', "School Name": 'McKinley'},
      {"Site  Type": 'School', "Region": 'San Jose', "School Name": 'Mathson Middle School'},
      {"Site  Type": 'School', "Region": 'San Jose', "School Name": 'Washington'},
      {"Site  Type": 'School', "Region": 'San Jose', "School Name": 'Cornerstone Elementary'},
      {"Site  Type": 'Community Center', "Region": 'Other', "School Name": 'Test School'},
      {"Site  Type": 'Community Center', "Region": 'IFC-SF', "School Name": 'IFC San Francisco'}
    ]
  },
  {
    dataType:"email",
    formValue:"PersonalEmail",
    formLabel:"Personal Email",
    helpText:"Enter Personal Email",
    placeholder:"Enter Personal Email",
    isRequired: true
  },
  {
    dataType:"tel",
    formValue:"HomePhone",
    formLabel:"Home Phone",
    helpText:"Enter Home Phone",
    placeholder:"Enter Home Phone"
  },
  {
    dataType:"date",
    formValue:"Birthdate",
    formLabel:"Birthdate",
    helpText:"Enter Birthdate",
    placeholder:"Enter Birthdate",
    min:"1900-01-01",
    max:"2021-04-01",
    isRequired: true
  },
  {
    dataType:"enum",
    formValue:"Gender",
    formLabel:"Gender",
    helpText:"Select Gender",
    placeholder:"Select Gender",
    enumItems: [
      "Male",
      "Female",
      "Non-binary",
      "Prefer not to say"
    ]
  },
  {
    dataType:"enum",
    formValue:"Grade",
    formLabel:"Grade",
    helpText:"Select Grade",
    placeholder:"Select Grade",
    enumItems: [
      "Kindergarten",
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th"
    ]
  },
  {
    dataType:"enum",
    formValue:"Ethnicity",
    formLabel:"Ethnicity",
    helpText:"Select Ethnicity",
    placeholder:"Select Ethnicity",
    enumItems: [
      "Hispanic/Latino",
      "Native American",
      "African American",
      "Pacific Islander",
      "Asian",
      "Caucasian",
      "Middle Eastern/Arabic",
      "Multi-Racial/Multi-Ethnic",
      "Filipino",
      "Other"
    ]
  },
  {
    dataType:"enum",
    formValue:"ReducedPriceLunch",
    formLabel:"Reduced Price Lunch",
    helpText:"Select Reduced Price Lunch",
    placeholder:"Select Reduced Price Lunch",
    enumItems: [
      "Yes",
      "No"
    ]
  },
  {
    dataType:"textArea",
    formValue:"Allergies",
    formLabel:"Allergies/Medical Conditions",
    helpText:"Enter Allergies/Medical Conditions",
    placeholder:"Enter Allergies/Medical Conditions"
  },
  {
    dataType:"enum",
    formValue:"PermissiontoCommuteAlone",
    formLabel:"Select Permission to Commute Alone",
    helpText:"Select Permission to Commute Alone",
    placeholder:"Select Permission to Commute Alone",
    enumItems: [
      "Yes",
      "No"
    ]
  },
  {
    dataType:"title",
    formLabel:"Parent/Guardian Information"
  },
  {
    dataType:"text",
    formValue:"ParentFName",
    formLabel:"Parent First Name",
    helpText:"Enter Parent First Name",
    placeholder:"Enter Parent First Name",
    isRequired: true
  },
  {
    dataType:"text",
    formValue:"ParentLName",
    formLabel:"Parent Last Name",
    helpText:"Enter Parent Last Name",
    placeholder:"Enter Parent Last Name",
    isRequired: true
  },
  {
    dataType:"email",
    formValue:"ParentEmail",
    formLabel:"Parent Email",
    helpText:"Enter Parent Email",
    placeholder:"Enter Parent Email",
    isRequired: true
  },
  {
    dataType:"text",
    formValue:"Relationship",
    formLabel:"Relationship to Child",
    helpText:"Enter Relationship to Child",
    placeholder:"Enter Relationship to Child"
  },
  {
    dataType:"tel",
    formValue:"ParentPhone1",
    formLabel:"Parent Phone 1",
    helpText:"Enter Parent Phone 1",
    placeholder:"Enter Parent Phone 1",
    isRequired: true
  },
  {
    dataType:"tel",
    formValue:"ParentPhone2",
    formLabel:"Parent Phone 2",
    helpText:"Enter Parent Phone 2",
    placeholder:"Enter Parent Phone 2"
  },
  {
    dataType:"tel",
    formValue:"ParentPhone3",
    formLabel:"Parent Phone 3",
    helpText:"Enter Parent Phone 3",
    placeholder:"Enter Parent Phone 3"
  },
  {
    dataType:"text",
    formValue:"MailingStreet",
    formLabel:"Mailing Street",
    helpText:"Enter Mailing Street",
    placeholder:"Enter Mailing Street"
  },
  {
    dataType:"text",
    formValue:"MailingCity",
    formLabel:"Mailing City",
    helpText:"Enter Mailing City",
    placeholder:"Enter Mailing City"
  },
  {
    dataType:"text",
    formValue:"MailingState",
    formLabel:"Mailing State/Province",
    helpText:"Enter Mailing State/Province",
    placeholder:"Enter Mailing State/Province"
  },
  {
    dataType:"number",
    formValue:"MailingZip",
    formLabel:"Mailing Zip",
    helpText:"Enter Mailing Zip",
    placeholder:"Enter Mailing Zip"
  },
  {
    dataType:"text",
    formValue:"MailingCountry",
    formLabel:"Mailing Country",
    helpText:"Enter Mailing Country",
    placeholder:"Enter Mailing Country"
  },
  {
    dataType:"enum",
    formValue:"ParentEnglishFluency",
    formLabel:"Parent English Fluency",
    helpText:"Select Parent English Fluency",
    placeholder:"Select Parent English Fluency",
    enumItems: [
      "Yes",
      "Some",
      "No"
    ]
  },
  {
    dataType:"enum",
    formValue:"ParentHomeLang",
    formLabel:"Parent Home Language",
    helpText:"Select Parent Home Language",
    placeholder:"Select Parent Home Language",
    enumItems: [
      "English",
      "Spanish",
      "Chinese (incl. Cantonese, Mandarin, other Chinese languages)",
      "Arabic",
      "Bengali",
      "French and French Creole",
      "German",
      "Greek",
      "Gujrati",
      "Hebrew",
      "Hindi",
      "Hmong",
      "Italian",
      "Japanese",
      "Korean",
      "Punjabi",
      "Persian",
      "Polish",
      "Portuguese",
      "Russian",
      "Tagalog",
      "Telugu",
      "Urdu",
      "Vietnamese",
      "Other"
    ]
  },
  {
    dataType:"enum",
    formValue:"Volunteer",
    formLabel:"Volunteer for this program? (Parent)",
    helpText:"Select Volunteer for this Program",
    placeholder:"Select Parent Home Language",
    enumItems: [
      "Yes",
      "No"
    ]
  },
  {
    dataType:"title",
    formLabel:"Emergency Contact (Other than Parent/Guardian)"
  },
  {
    dataType:"text",
    formValue:"Emergency_Contact_Name",
    formLabel:"Emergency Contact Name",
    helpText:"Enter Emergency Contact Name",
    placeholder:"Enter Emergency Contact Name"
  },
  {
    dataType:"text",
    formValue:"Emergency_Contact_Relationship",
    formLabel:"Emergency Relationship to Child",
    helpText:"Enter Emergency Relationship to Child",
    placeholder:"Enter Emergency Relationship to Child"
  },
  {
    dataType:"tel",
    formValue:"Emergency_Contact_Phone1",
    formLabel:"Emergency Phone 1",
    helpText:"Enter Emergency Phone 1",
    placeholder:"Enter Emergency Phone 1"
  },
  {
    dataType:"tel",
    formValue:"Second_Emergency_Contact_Phone2",
    formLabel:"Emergency Phone 2",
    helpText:"Enter Emergency Phone 2",
    placeholder:"Enter Emergency Phone 2"
  },
  {
    dataType:"tel",
    formValue:"Emergency_Contact_Phone3",
    formLabel:"Emergency Phone 3",
    helpText:"Enter Emergency Phone 3",
    placeholder:"Enter Emergency Phone 3"
  },
  {
    dataType:"enum",
    formValue:"Emergency_Contact_Permission_to_Pickup_child",
    formLabel:"Permission to Pick up Child?",
    helpText:"Select Permission to Pick up Child",
    placeholder:"Select Permission to Pick up Child",
    enumItems: [
      "Yes",
      "No"
    ]
  },
  {
    dataType:"title",
    formLabel:"Second Emergency Contact (Other than Parent/Guardian and Primary Emergency Contact)"
  },
  {
    dataType:"text",
    formValue:"Second_Emergency_Contact_Name",
    formLabel:"Secondary Emergency Contact Name",
    helpText:"Enter Secondary Emergency Contact Name",
    placeholder:"Enter Secondary Emergency Contact Name"
  },
  {
    dataType:"text",
    formValue:"Second_Emergency_Contact_Relationship",
    formLabel:"Secondary Emergency Relationship to Child",
    helpText:"Enter Secondary Emergency Relationship to Child",
    placeholder:"Enter Secondary Emergency Relationship to Child"
  },
  {
    dataType:"tel",
    formValue:"Second_Emergency_Contact_Phone1",
    formLabel:"Secondary Emergency Phone 1",
    helpText:"Enter Secondary Emergency Phone 1",
    placeholder:"Enter Secondary Emergency Phone 1"
  },
  {
    dataType:"tel",
    formValue:"Second_Emergency_Contact_Phone2",
    formLabel:"Secondary Emergency Phone 2",
    helpText:"Enter Secondary Emergency Phone 2",
    placeholder:"Enter Secondary Emergency Phone 2"
  },
  {
    dataType:"tel",
    formValue:"Second_Emergency_Contact_Phone3",
    formLabel:"Secondary Emergency Phone 3",
    helpText:"Enter Secondary Emergency Phone 3",
    placeholder:"Enter Secondary Emergency Phone 3"
  },
  {
    dataType: "enum",
    formValue: "Second_Emergency_Contact_Permission_to_Pickup_child",
    formLabel: "Secondary Permission to Pick up Child?",
    helpText: "Select Secondary Permission to Pick up Child",
    placeholder: "Select Secondary Permission to Pick up Child",
    enumItems: [
      "Yes",
      "No"
    ]
  }
];

export default formConfig;
