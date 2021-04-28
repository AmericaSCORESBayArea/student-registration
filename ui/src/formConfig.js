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
    dataType:"enum",
    formValue:"SchoolName",
    formLabel:"School Name",
    helpText:"Select School Name",
    placeholder:"Enter School Name",
    isRequired: true,
    enumItems: [
      "Adelante Selby Lane Elementary School",
      "Alvarado Elementary School",
      "ASCEND Elementary School",
      "Bowman Elementary School",
      "Bret Harte Elementary School",
      "Bret Harte Middle School",
      "Bridges Academy Elementary School",
      "Bryant Elementary School",
      "Burbank Elementary School",
      "Cesar Chavez Middle School",
      "Chad's School Site",
      "Cherryland Elementary School",
      "Cleveland Elementary School",
      "Coleman Elementary School",
      "Davidson Middle School",
      "East Avenue Elementary School",
      "Eden Gardens Elementary School",
      "El Dorado Elementary School",
      "Eldridge Elementary School",
      "Elmhurst Elementary School",
      "EnCompass Elementary School",
      "ER Taylor Elementary School",
      "Esperanza Elementary School",
      "Everett Middle School",
      "Fairview Elementary School",
      "Faith Ringgold Elementary School",
      "Flynn Elementary School",
      "Francisco Middle School",
      "Futures & Community United Elementary School",
      "Futures Elementary School",
      "Garfield Elementary School",
      "Glassbrook Elementary School",
      "Glenview Elementary School",
      "Global Family Elementary School",
      "Greenleaf Elementary School",
      "Guadalupe Elementary School",
      "Harder Elementary School",
      "Hawes Elementary School",
      "Henry Ford Elementary School",
      "Herbert Hoover Middle School",
      "Hillcrest Elementary School",
      "Howard Elementary School",
      "IFC San Francisco",
      "Indochinese Housing Development Corporation - Program Site",
      "International Community School & Think College Now",
      "John Gill Elementary School",
      "John Muir Elementary School",
      "Joseph Lee Rec Center Bayview",
      "Junipero Serra Elementary",
      "Kipp Middle School",
      "KIPP SF Bay Academy Lead Agency",
      "KIPP SF Bay Academy Program Site",
      "Korematsu Discovery Academy",
      "Lakeshore Alternative Elementary School",
      "Laurel Dell Elementary School",
      "Learning Without Limits Elementary School",
      "Longwood Elementary School",
      "Lorin Eden Elementary School",
      "Madison Park Primary",
      "Manzanita Community School & Manzanita SEED",
      "Marshall Elementary School",
      "Mathson Middle School",
      "McCoppin Elementary School",
      "Mission Education Center",
      "MLK Academic Middle School",
      "MLK Lafayette Elementary School",
      "MLK Middle School",
      "Monroe Elementary School",
      "Montera Middle School",
      "Moscone Elementary School",
      "Ocala Middle School",
      "Ochoa Middle School",
      "Palma Ceia Elementary School",
      "Panorama Elementary School",
      "Park Elementary School",
      "Paul Revere Elementary School",
      "Paul Revere Middle School",
      "Prescott Elementary School",
      "Redding Elementary School",
      "Ruus Elementary School",
      "Salvation Army Kroc Center - Program Site",
      "San Francisco Community School",
      "San Pedro Elementary School",
      "Sanchez Elementary School",
      "Sankofa Academy",
      "Schafer Elementary School",
      "Sherman Elementary School",
      "Short Elementary School",
      "Southgate Elementary School",
      "Stonebrae Elementary School",
      "Strobridge Elementary School",
      "Sunnyside Elementary School",
      "TECA Elementary School - Program Site",
      "TECA Middle School - Program Site",
      "Tenderloin Community School",
      "Treeview Elementary School",
      "Tyrrell Elementary School",
      "Up on Top - Program Site",
      "Venetia Valley K-8 School",
      "Visitation Valley Middle School",
      "Westlake Middle School",
      "Willie Brown Middle School",
      "Winton Middle School",
      "Woodrow Wilson Elementary School"
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
    dataType:"enum",
    formValue:"Second_Emergency_Contact_Permission_to_Pickup_child",
    formLabel:"Secondary Permission to Pick up Child?",
    helpText:"Select Secondary Permission to Pick up Child",
    placeholder:"Select Secondary Permission to Pick up Child",
    enumItems: [
      "Yes",
      "No"
    ]
  }
];

export default formConfig;
