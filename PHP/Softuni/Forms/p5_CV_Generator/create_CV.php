<?php include 'validations.php' ?>
<?php if (isset($_POST['submit'])):

    $isDataValid = true;
    if (!checkIfOnlyLetters($_POST['fname']) || !checkIfLengthFrom2To20($_POST['fname'])
        || !checkIfOnlyLetters($_POST['lname']) || !checkIfLengthFrom2To20($_POST['lname'])
    ) {
        echo "Invalid name<br/>";
        $isDataValid = false;
    }
    foreach ($_POST['spokenLang'] as $spokenLang) {
        if (!checkIfOnlyLetters($spokenLang) || !checkIfLengthFrom2To20($spokenLang)) {
            echo "Unknown Language<br/>";
            $isDataValid = false;
            break;
        }
    }
    if (!checkIfOnlyLettersAndNumbers($_POST['compName']) || !checkIfLengthFrom2To20($_POST['compName'])) {
        echo "Invalid company name<br/>";
        $isDataValid = false;
    }
    if (!checkPhone($_POST['phone'])) {
        echo "Invalid Phone number<br/>";
        $isDataValid = false;
    }
    if (!checkEmail($_POST['email'])) {
        echo "Invalid Email<br/>";
        $isDataValid = false;
    }

    if ($isDataValid) {
        $fname = htmlspecialchars(trim($_POST['fname']));
        $lname = htmlspecialchars(trim($_POST['lname']));
        $email = htmlspecialchars(trim($_POST['email']));
        $phone = htmlspecialchars(trim($_POST['phone']));
        $sex = htmlspecialchars(trim($_POST['sex']));
        $birthday = htmlspecialchars(trim($_POST['birthday']));
        $nationality = htmlspecialchars(trim($_POST['nationality']));
        $companyName = htmlspecialchars(trim($_POST['compName']));
        $workingFrom = htmlspecialchars(trim($_POST['compFrom']));
        $workingTo = htmlspecialchars(trim($_POST['compTo']));
        $spokenLanguages = $_POST['spokenLang'];
        $programmingLanguages = $_POST['progLang'];
        $programmingLevel = $_POST['progLevel'];
        $comprehension = $_POST['comprehension'];
        $reading = $_POST['reading'];
        $writing = $_POST['writing'];

        echo
        "<h1>CV</h1>
    <table border=\"1\">
        <thead>
        <tr>
        <th colspan=\"2\">Personal Information</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>First Name</td><td>$fname</td>
        </tr>
        <tr>
            <td>Last Name</td><td>$lname</td>
        </tr>
        <tr>
            <td>Email</td><td>$email</td>
        </tr>
        <tr>
            <td>Phone Number</td><td>$phone</td>
        </tr>
        <tr>
            <td>Gender</td><td>$sex</td>
        </tr>
        <tr>
            <td>Birth Date</td><td>$birthday</td>
        </tr>
        <tr>
            <td>Nationality</td><td>$nationality</td>
        </tr>
        </tbody>
    </table><br/><br/>
    <table border=\"1\">
        <thead>
        <tr>
        <th colspan=\"2\">Last Work Position</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Company Name</td><td>$companyName</td>
        </tr>
        <tr>
            <td>From</td><td>$workingFrom</td>
        </tr>
        <tr>
            <td>To</td><td>$workingTo</td>
        </tr>
        </tbody>
        </table><br/><br/>
    <table border=\"1\">
        <thead>
        <tr>
        <th colspan=\"2\">Computer Skills</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Programming Languages</td>
            <td>
            <table border=\"1\">
                <thead>
                    <tr><th>Language</th><th>Skill Level</th></tr>
                </thead>
                <tbody>";
        foreach ($programmingLanguages as $i => $progLang) {
            echo "<tr><td>".htmlspecialchars(trim($progLang))."</td><td>$programmingLevel[$i]</td></tr>";
        }
        echo "</tbody>
            </table>
            </td>
        </tr>
        </tbody>
        </table>
        <br/><br/>
        <table border=\"1\">
            <thead>
                <tr>
                    <th colspan=\"2\">Other Skills</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Languages</td>
                <td>
                <table border=\"1\">
                    <thead>
                        <tr><th>Language</th><th>Comprehension</th>
                        <th>Reading</th><th>Writing</th></tr>
                    </thead>
                    <tbody>";
                        foreach ($spokenLanguages as $i => $spokenLang) {
                            echo "<tr><td>".htmlspecialchars(trim($spokenLang))."</td>
                            <td>$comprehension[$i]</td><td>$reading[$i]</td><td>$writing[$i]</td></tr>";
                        }
            echo " </tbody>
                </table>
                </td>
            </tr>
            <tr><td>Driver's License</td><td>".implode(', ', $_POST['driveLicense'])."</td></tr></tbody>
            </tbody>
        </table>
        ";
    }

endif ?>
