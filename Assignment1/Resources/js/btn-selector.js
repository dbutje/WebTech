<script>
$(document).ready(function(){
    $("#btn-calendar").click(function(){
        $("#calendar-div").show();
        $("#connect-div").hide();
        $("#shoot-div").hide();
        $("#share-div").hide();
    });
    $("#btn-connect").click(function(){
        $("#calendar-div").hide();
        $("#connect-div").show();
        $("#calendar-div").hide();
        $("#calendar-div").hide();
        $("#button-connect").addClass('active')
    });
     $("#btn-shoot").click(function(){
        $("#calendar-div").hide();
        $("#connect-div").hide();
        $("#shoot-div").show();
        $("#share-div").hide();
    });
     $("#btn-share").click(function(){
        $("#calendar-div").hide();
        $("#connect-div").hide();
        $("#shoot-div").hide();
        $("#share-div").show();
        });
});

</script>