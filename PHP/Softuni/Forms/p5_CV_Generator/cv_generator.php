<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="cv_generator.css" type="text/css"/>
    <title>CV generator</title>
</head>
<body>
<?php include 'validations.php' ?>
<div class="wrapper">
    <form action="create_CV.php" method="post">
        <fieldset id="personalInfo">
            <legend>Personal Information</legend>

            <input type="text" name="fname" placeholder="First Name"/>
            <input type="text" name="lname" placeholder="Last Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="phone" placeholder="Phone Number"/>

            <div>
                <label for="female">Female</label>
                <input type="radio" id="female" name="sex" value="Female"/>
                <label for="male">Male</label>
                <input type="radio" id="male" name="sex" value="Male"/>
            </div>

            <label for="birthday">Birth Date</label>
            <input type="date" id="birthday" name="birthday"/>


            <label for="nationality">Nationality</label>
            <select name="nationality" id="nationality">
                <option value="Bulgarian" selected="selected">Bulgarian</option>
                <option value="German">German</option>
                <option value="Italian">Italian</option>
            </select>

        </fieldset>
        <fieldset id="workPosition">
            <legend>Last Work Position</legend>
            <div>
                <label for="company">Company name</label>
                <input type="text" id="company" name="compName"/>
            </div>
            <div>
                <label for="from">From</label>
                <input type="date" id="from" name="compFrom"/>
            </div>
            <div>
                <label for="to">To</label>
                <input type="date" id="to" name="compTo"/>
            </div>
        </fieldset>
        <fieldset id="computerSkills">
            <legend>Computer Skills</legend>
            <label for="progLanguages">Programming Languages</label>

            <div id="progLanguages"><div>
                    <input type="text" name="progLang[]"/>
                    <select name="progLevel[]">
                        <option value="Begginer">Beginner</option>
                        <option value="Programmer">Programmer</option>
                        <option value="Ninja">Ninja</option>
                    </select>
                </div>
            </div>
            <div class="buttons" id="compLang">
                <input type="button" value="Remove Language" id="removeCompLang"/>
                <input type="button" value="Add Language" id="addCompLang"/>
            </div>
        </fieldset>
        <fieldset id="otherSkills">
            <legend>Other Skills</legend>
            <label for="languages">Languages</label>

            <div id="languages"><div>
                <input type="text" name="spokenLang[]"/>
                <select name="comprehension[]">
                    <option selected disabled>-Comprehension-</option>
                    <option value="beginner">beginner</option>
                    <option value="intermediate">intermediate</option>
                    <option value="advanced">advanced</option>
                </select>
                <select name="reading[]">
                    <option selected disabled>-Reading-</option>
                    <option value="beginner">beginner</option>
                    <option value="intermediate">intermediate</option>
                    <option value="advanced">advanced</option>
                </select>
                <select name="writing[]">
                    <option selected disabled>-Writing-</option>
                    <option value="beginner">beginner</option>
                    <option value="intermediate">intermediate</option>
                    <option value="advanced">advanced</option>
                </select>
                </div>
            </div>
            <div class="buttons" id="spokenLang">
                <input type="button" value="Remove Language" id="removeSpokenLang"/>
                <input type="button" value="Add Language" id="addSpokenLang"/>
            </div>
            <label for="driveLicence">Driver's Licence</label>

            <div id="driveLicense">
                <label for="b">B</label>
                <input type="checkbox" id="b" value="B" name="driveLicense[]"/>
                <label for="a">A</label>
                <input type="checkbox" id="a" value="A" name="driveLicense[]"/>
                <label for="c">C</label>
                <input type="checkbox" id="c" value="C" name="driveLicense[]"/>
            </div>
        </fieldset>
        <input type="submit" value="Generate CV" name="submit"/>
    </form>
</div>
<script type="text/javascript" src="addRemoveInputs.js"></script>
</body>
</html>