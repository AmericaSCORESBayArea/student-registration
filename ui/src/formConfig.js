const formConfig = [
  {
    dataType:"title",
    formLabel:"Student Details"
  },
  {
    dataType:"text",
    formValue:"firstName",
    formLabel:"First Name",
    helpText:"Enter First Name",
    isRequired:true,
    placeholder:"Enter First Name"
  },
  {
    dataType:"text",
    formValue:"middleName",
    formLabel:"Middle Name",
    helpText:"Enter Middle Name",
    isRequired:false,
    placeholder:"Enter Middle Name"
  },
  {
    dataType:"text",
    formValue:"lastName",
    formLabel:"Last Name",
    helpText:"Enter Last Name",
    isRequired:true,
    placeholder:"Enter Last Name"
  },
  {
    dataType:"enum",
    formValue:"schoolName",
    formLabel:"School Name",
    helpText:"Select School Name",
    isRequired:true,
    placeholder:"Enter School Name",
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
    formValue:"personalEmail",
    formLabel:"Personal Email",
    helpText:"Enter Personal Email",
    isRequired:true,
    placeholder:"Enter Personal Email"
  },
  {
    dataType:"tel",
    formValue:"homePhone",
    formLabel:"Home Phone",
    helpText:"Enter Home Phone",
    isRequired:true,
    placeholder:"Enter Home Phone"
  },
  {
    dataType:"date",
    formValue:"birthDate",
    formLabel:"Birthdate",
    helpText:"Enter Birthdate",
    isRequired:true,
    placeholder:"Enter Birthdate",
    min:"1900-01-01",
    max:"2021-04-01"
  },
  {
    dataType:"enum",
    formValue:"gender",
    formLabel:"Gender",
    helpText:"Select Gender",
    isRequired:true,
    placeholder:"Select Gender",
    enumItems: [
      "Female",
      "Male",
      "Transgender",
      "Other"
    ]
  },
  {
    dataType:"enum",
    formValue:"grade",
    formLabel:"Grade",
    helpText:"Select Grade",
    isRequired:true,
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
    formValue:"ethnicity",
    formLabel:"Ethnicity",
    helpText:"Select Ethnicity",
    isRequired:true,
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
    formValue:"reducedPriceLunch",
    formLabel:"Reduced Price Lunch",
    helpText:"Select Reduced Price Lunch",
    isRequired:true,
    placeholder:"Select Reduced Price Lunch",
    enumItems: [
      "Yes",
      "No"
    ]
  },
  {
    dataType:"textArea",
    formValue:"allergiesMedicalConditions",
    formLabel:"Allergies/Medical Conditions",
    helpText:"Enter Allergies/Medical Conditions",
    isRequired:true,
    placeholder:"Enter Allergies/Medical Conditions"
  },
  {
    dataType:"enum",
    formValue:"permissionToCommuteAlone",
    formLabel:"Select Permission to Commute Alone",
    helpText:"Select Permission to Commute Alone",
    isRequired:true,
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
    formValue:"parentFirstName",
    formLabel:"Parent First Name",
    helpText:"Enter Parent First Name",
    isRequired:true,
    placeholder:"Enter Parent First Name"
  },
  {
    dataType:"text",
    formValue:"parentLastName",
    formLabel:"Parent Last Name",
    helpText:"Enter Parent Last Name",
    isRequired:true,
    placeholder:"Enter Parent Last Name"
  },
  {
    dataType:"email",
    formValue:"parentPersonalEmail",
    formLabel:"Parent Email",
    helpText:"Enter Parent Email",
    isRequired:true,
    placeholder:"Enter Parent Email"
  },
  {
    dataType:"text",
    formValue:"relationshipToChild",
    formLabel:"Relationship to Child",
    helpText:"Enter Relationship to Child",
    isRequired:true,
    placeholder:"Enter Relationship to Child"
  },
  {
    dataType:"tel",
    formValue:"parentPhone1",
    formLabel:"Parent Phone 1",
    helpText:"Enter Parent Phone 1",
    isRequired:true,
    placeholder:"Enter Parent Phone 1"
  },
  {
    dataType:"tel",
    formValue:"parentPhone2",
    formLabel:"Parent Phone 2",
    helpText:"Enter Parent Phone 2",
    isRequired:true,
    placeholder:"Enter Parent Phone 2"
  },
  {
    dataType:"tel",
    formValue:"parentPhone3",
    formLabel:"Parent Phone 3",
    helpText:"Enter Parent Phone 3",
    isRequired:true,
    placeholder:"Enter Parent Phone 3"
  },
  {
    dataType:"text",
    formValue:"mailingStreet",
    formLabel:"Mailing Street",
    helpText:"Enter Mailing Street",
    isRequired:true,
    placeholder:"Enter Mailing Street"
  },
  {
    dataType:"text",
    formValue:"mailingCity",
    formLabel:"Mailing City",
    helpText:"Enter Mailing City",
    isRequired:true,
    placeholder:"Enter Mailing City"
  },
  {
    dataType:"text",
    formValue:"mailingState",
    formLabel:"Mailing State/Province",
    helpText:"Enter Mailing State/Province",
    isRequired:true,
    placeholder:"Enter Mailing State/Province"
  },
  {
    dataType:"text",
    formValue:"mailingZip",
    formLabel:"Mailing Zip",
    helpText:"Enter Mailing Zip",
    isRequired:true,
    placeholder:"Enter Mailing Zip"
  },
  {
    dataType:"text",
    formValue:"mailingCountry",
    formLabel:"Mailing Country",
    helpText:"Enter Mailing Country",
    isRequired:true,
    placeholder:"Enter Mailing Country"
  },
  {
    dataType:"enum",
    formValue:"parentEnglishFluency",
    formLabel:"Parent English Fluency",
    helpText:"Select Parent English Fluency",
    isRequired:true,
    placeholder:"Select Parent English Fluency",
    enumItems: [
      "Yes",
      "Some",
      "No"
    ]
  },
  {
    dataType:"enum",
    formValue:"parentHomeLanguage",
    formLabel:"Parent Home Language",
    helpText:"Select Parent Home Language",
    isRequired:true,
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
    formValue:"volunteerForThisProgram",
    formLabel:"Volunteer for this program? (Parent)",
    helpText:"Select Volunteer for this Program",
    isRequired:true,
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
    formValue:"emergencyContactName",
    formLabel:"Emergency Contact Name",
    helpText:"Enter Emergency Contact Name",
    isRequired:true,
    placeholder:"Enter Emergency Contact Name"
  },
  {
    dataType:"text",
    formValue:"emergencyRelationshipToChild",
    formLabel:"Emergency Relationship to Child",
    helpText:"Enter Emergency Relationship to Child",
    isRequired:true,
    placeholder:"Enter Emergency Relationship to Child"
  },
  {
    dataType:"tel",
    formValue:"emergencyPhone1",
    formLabel:"Emergency Phone 1",
    helpText:"Enter Emergency Phone 1",
    isRequired:true,
    placeholder:"Enter Emergency Phone 1"
  },
  {
    dataType:"tel",
    formValue:"emergencyPhone2",
    formLabel:"Emergency Phone 2",
    helpText:"Enter Emergency Phone 2",
    isRequired:true,
    placeholder:"Enter Emergency Phone 2"
  },
  {
    dataType:"tel",
    formValue:"emergencyPhone3",
    formLabel:"Emergency Phone 3",
    helpText:"Enter Emergency Phone 3",
    isRequired:true,
    placeholder:"Enter Emergency Phone 3"
  },
  {
    dataType:"enum",
    formValue:"permissionForEmergencyContactToPickupChild",
    formLabel:"Permission to Pick up Child?",
    helpText:"Select Permission to Pick up Child",
    isRequired:true,
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
    formValue:"secondaryEmergencyContactName",
    formLabel:"Secondary Emergency Contact Name",
    helpText:"Enter Secondary Emergency Contact Name",
    isRequired:true,
    placeholder:"Enter Secondary Emergency Contact Name"
  },
  {
    dataType:"text",
    formValue:"secondaryEmergencyRelationshipToChild",
    formLabel:"Secondary Emergency Relationship to Child",
    helpText:"Enter Secondary Emergency Relationship to Child",
    isRequired:true,
    placeholder:"Enter Secondary Emergency Relationship to Child"
  },
  {
    dataType:"tel",
    formValue:"secondaryEmergencyPhone1",
    formLabel:"Secondary Emergency Phone 1",
    helpText:"Enter Secondary Emergency Phone 1",
    isRequired:true,
    placeholder:"Enter Secondary Emergency Phone 1"
  },
  {
    dataType:"tel",
    formValue:"secondaryEmergencyPhone2",
    formLabel:"Secondary Emergency Phone 2",
    helpText:"Enter Secondary Emergency Phone 2",
    isRequired:true,
    placeholder:"Enter Secondary Emergency Phone 2"
  },
  {
    dataType:"tel",
    formValue:"secondaryEmergencyPhone3",
    formLabel:"Secondary Emergency Phone 3",
    helpText:"Enter Secondary Emergency Phone 3",
    isRequired:true,
    placeholder:"Enter Secondary Emergency Phone 3"
  },
  {
    dataType:"enum",
    formValue:"secondaryPermissionForEmergencyContactToPickupChild",
    formLabel:"Secondary Permission to Pick up Child?",
    helpText:"Select Secondary Permission to Pick up Child",
    isRequired:true,
    placeholder:"Select Secondary Permission to Pick up Child",
    enumItems: [
      "Yes",
      "No"
    ]
  }
];

export default formConfig;