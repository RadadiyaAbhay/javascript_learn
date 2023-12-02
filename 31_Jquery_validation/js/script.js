$("#commentForm").validate({
    rules:{
        name:{
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        pass:{
            required:true,
            minlength : 6,
            maxlength:10,
        },
        cpass:{
            required:true,
            minlength : 6,
            maxlength:10,
        } 
    },
    messages: {
        name: {
          required: "Plz Enter Name",
          minlength: 'Enter at least 2 Char.'
        }
    }
});