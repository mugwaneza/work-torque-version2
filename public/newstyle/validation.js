
$('#customer-form').validate({
    rules : {
        firstname : {
            required : true,
            minlength : 3
        },
        lastname :{
            required : true,
            minlength : 3
         },
        phonenumber : {
            required : true,
            number : true,
            minlength : 10,
            maxlength : 10
        }

            , amount : {
            required : true,
            min:100
        },
        email : {
            required : true,
            email : true
        },
        password : {
            required : true,
            minlength : 6
        },
        conf_password : {
            required : true,
            equalTo : "#user_password"
        }

    }
});




$('#student-form').validate({
    rules : {
        name : {
            required : true,
            minlength : 3
        },
        location :{
            required : true,
            minlength : 3
        },
        phone : {
            required : true,
            number : true,
            minlength : 10,
            maxlength : 10
        },
        email : {
            required : true,
            email : true
        },
        username : {
            minlength : 3,
            required : true
        },
        password : {
            required : true,
            minlength : 6
        },
        conf_password : {
            required : true,
            equalTo : "#user_password"
        }

    }
});
$('#faculty-form').validate({
    rules : {
        facultyName : {
            required : true,
            minlength : 2
        }
    }
});
$('#department-form').validate({
    rules : {
        facultyId : {
            required : true
        },
        departmentName : {
            required : true,
            minlength : 2
        }
    }
});
$('#period-form').validate({
    rules : {
        periodName : {
            required : true
        }
    }
});
$('#test-form').validate({
    rules : {
        departmentId : {
            required : true
        },
        periodId : {
            required : true,
            academicYear : true
        },
        indicatorName : {
            required : true,
            minlength : 15
        },
        indicatorName : {
            clarification : 15
        },
        outOf : {
            clarification : 0
        }
    }
});






$('#domain-form').validate({
    rules : {
        domainName : {
            required : true
        }
    }
});
$('#sub-form').validate({
    rules : {
        domain_id : {
            required : true
        },
        subTitlreDescription : {
            required : true,
            minlength : 5
        }
    }
});
$('#question-form').validate({
    rules : {
        questionDescription : {
            required : true,
            minlength : 5
        },
        clarification : {
            required : true,
            minlength : 5
        }
    }
});
$('#daterep-form').validate({
    rules : {
        startDate : {
            required : true
        },
        endDate : {
            required : true
        }
    }
});
$('#per-form').validate({
    rules : {
        periodName : {
            required : true
        }
    }
});
$('#domRep-form').validate({
    rules : {
        username : {
            required : true
        },
        password : {
            required : true
        }
    }
});
$('#login-form').validate({
    rules : {
        domainName : {
            required : true
        },
        districtName : {
            required : true
        },
        periodName : {
            required : true
        }
    }
});



/**
 * Created by Administrator on 1/7/2016.
 */
