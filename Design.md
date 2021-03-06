# Safe Waivers and Releases
## Web App and API Interactions
![Regform_API_Interactions.png](Regform_API_Interactions.png)

## Scores Students and Family releases are secure, tracked, and actionable with Mulesoft and Salesforce Integration

### Families Must Sign Waivers and Releases Seasonally
● Required by city departments and/or school district
● Required by Scores
● Requires for Scores online education and activities

```
○ Online Youth Privacy Policy (CCPA, PIPPA)
○ Secure Forms and Registration Updates
```
### These objectives are being maintained on the project at https://github.com/AmericaSCORESBayArea/student-registration/projects/1 and https://github.com/AmericaSCORESBayArea/student-registration/milestones

#### An Online Solution Must be Secure and Structured

- [ ] ~~Forms can be hosted on ASBA squarespace (not critical)~~
- [x] Form also works on Mobile (or as an embed in the mobile apps)
- [x] A Spanish-Language version is required for all forms (MVP is including both languages in one form)
- [x] Registration is either New Student or Update Returning and can be determined by parent login (mulesoft proxy API + OAuth)
- [x] Waiver can be hosted on Squarespace (or stored in Salesforce)
- [x] Waiver is different, by region, requiring logic (e.g. School selected in Reg form)
- [ ] After waiver is Accepted online it must be emailed to parent (CCPA) ideally from Salesforce

#### Registration and Waiver Flow via Web URL

1. Receive a call and/or email from Scores with a link to the Registration form on ScoresU
2. Arriving at the Reg link, Parent enters name and mobile number.
3. If they are returning, they receive an authentication code via SMS to access a populated form for
    them to update and submit
4. If they are new, they are presented with an empty form to complete.
5. The completed waiver is sent as an attachment with "Accepted by (parent name and email)" in the email body. (optionally in the waiver attachment as well). Waiver can be in pdf or a common image format.
![Regform_Parent_UX.png](Regform_Parent_UX.png)


### MVP
-[The San Francisco District Waiver can be used in the MVP release of the Web Registration](waiver_SF.md)

## Data Requirements
### The Contact Object stores the Student Registration info, including Waiver Status for the present Season
### A historical record is made including: Date/Time, Contact ID, Parent Full Name, Parent Email, WaiverName, Acceptance (T/F)
The historical record belongs in a Salesforce implementation, but a logfile, in addition to the emails that are sent, will meet MVP requirements.
