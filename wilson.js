var current_hash;

function change_hash(hash)
{
    if (hash != current_hash)
    {
        var el = document.getElementById(hash);
        if (el)
	{
            var content = document.getElementById("content");
            for (var i = 0; i < content.childNodes.length; i++)
	    {
		var node = content.childNodes[i];
                if ("style" in node)
		{
                    node.style.display = "none";
		}
            }
            el.style.display = "block";
	    current_hash = hash;
        }
    }
}

window.onload = function() {
    var hash = (window.location.hash || "#home").substr(1);
    change_hash(hash);
}