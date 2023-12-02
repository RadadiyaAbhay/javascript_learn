var res = document.getElementById('res')
let count = 1;
function addImg(params) {


    if ((count % 2) == 0) {

        var pri = document.getElementById(`box${params}`);
        console.log(pri);

        if (pri.innerHTML == '') {
            pri.innerHTML = `<i class="bi bi-x-lg fs-4"></i>`
            count++;
        }
    } else {
        var pri = document.getElementById(`box${params}`);
        console.log(pri.innerHTML);

        if (pri.innerHTML == '') {
            pri.innerHTML = `<i class="bi bi-circle fs-4"></i>`
            count++;
        }
    }

    if (count > 5) {
        var k1 = document.getElementById('box1').innerHTML;
        var k2 = document.getElementById('box2').innerHTML;
        var k3 = document.getElementById('box3').innerHTML;
        var k4 = document.getElementById('box4').innerHTML;
        var k5 = document.getElementById('box5').innerHTML;
        var k6 = document.getElementById('box6').innerHTML;
        var k7 = document.getElementById('box7').innerHTML;
        var k8 = document.getElementById('box8').innerHTML;
        var k9 = document.getElementById('box9').innerHTML;
        var line = document.getElementById('line');

        if (k1 == k2 && k3 == k2 && k1 != '') {
            res.innerHTML = `
            <h4>${k1} is Winner</h4>
            `
            line.innerHTML = `
            <div class="position-absolute  col-12 d-flex justify-content-center " style="top:16%;">
                <div class="col-11 border border-black border-2 "></div>
            </div>
            `
        }
        if (k4 == k5 && k6 == k5 && k4 != '') {
            res.innerHTML = `
            <h4>${k4} is Winner</h4>
            `
            line.innerHTML = `
            <div class="position-absolute  col-12 d-flex justify-content-center " style="top:49.66%;">
                <div class="col-11 border border-black border-2 "></div>
            </div>
            `
        }
        if (k7 == k8 && k8 == k9 && k9 != '') {
            res.innerHTML = `
            <h4>${k7} is Winner</h4>
            `
            line.innerHTML = `
            <div class="position-absolute  col-12 d-flex justify-content-center " style="top:83%;">
                <div class="col-11 border border-black border-2 "></div>
            </div>
            `
        }
        if (k1 == k4 && k7 == k1 && k1 != '') {
            res.innerHTML = `
            <h4>${k1} is Winner</h4>
            `
            line.innerHTML = `
            <div class="position-absolute d-flex align-items-center " style="left:16%;height: 100%;">
                <div class=" border border-black border-2 " style="height: 91.66%;"></div>
            </div>
            `

        }
        if (k2 == k5 && k5 == k8 && k5 != '') {
            res.innerHTML = `
            <h4>${k5} is Winner</h4>
            `
            line.innerHTML = `
            <div class="position-absolute d-flex align-items-center " style="left:49.66%;height: 100%;">
                <div class=" border border-black border-2 " style="height: 91.66%;"></div>
            </div>
            `
        }
        if (k3 == k6 && k6 == k9 && k9 != '') {
            res.innerHTML = `
            <h4>${k3} is Winner</h4>
            `
            line.innerHTML = `
            <div class="position-absolute d-flex align-items-center " style="left:83%;height: 100%;">
                <div class=" border border-black border-2 " style="height: 91.66%;"></div>
            </div>
            `
        }
        if (k1 == k5 && k5 == k9 && k5 != '') {
            res.innerHTML = `
            <h4>${k1} is Winner</h4>
            `
            line.innerHTML = `
            <div class="border border-2 border-black position-absolute col-12" style="transform: rotate(45deg); top: 50%;">
            </div>
            `
        }
        if (k7 == k5 && k7 == k3 && k3 != '') {
            res.innerHTML = `
            <h4>${k5} is Winner</h4>
            `
            line.innerHTML = `
            <div class="border border-2 border-black position-absolute col-12" style="transform: rotate(-45deg); top: 50%;">
            </div>
            `
        }
    }
}


function reset() {
    count = 1;
    res.innerHTML = ``

    document.getElementById('box1').innerHTML = '';
    document.getElementById('box2').innerHTML = '';
    document.getElementById('box3').innerHTML = '';
    document.getElementById('box4').innerHTML = '';
    document.getElementById('box5').innerHTML = '';
    document.getElementById('box6').innerHTML = '';
    document.getElementById('box7').innerHTML = '';
    document.getElementById('box8').innerHTML = '';
    document.getElementById('box9').innerHTML = '';
    document.getElementById('line').innerHTML = '';

}

