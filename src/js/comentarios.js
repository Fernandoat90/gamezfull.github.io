document.addEventListener("DOMContentLoaded", function () {
    const { createClient } = supabase;

    const supabaseUrl = 'https://mcljfvdksggqnqudkzip.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbGpmdmRrc2dncW5xdWRremlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxOTM3MDQsImV4cCI6MjA2Mzc2OTcwNH0.Fk1osUqO6GdbcPchF9PwTAUfkvO5J9F1pOETXaI-Ewo'; // tu clave
    const supabaseClient = createClient(supabaseUrl, supabaseKey);

    const form = document.getElementById("form-data");
    const comentariosDiv = document.getElementById("comentarios");

    // Función para cargar comentarios
    async function cargarComentarios() {
        const { data, error } = await supabaseClient
        .from('comentarios')
        .select('*')
        .order('creado_en', { ascending: false });

        if (error) {
        console.error("Error al cargar comentarios:", error.message);
        return;
        }

        comentariosDiv.innerHTML = '';
        data.forEach(com => {
        const div = document.createElement('div');
        div.classList.add("coment");
        div.innerHTML = `<strong>${com.nombre}</strong>: ${com.mensaje}`;
        comentariosDiv.appendChild(div);
        });
    }

    // Evento de envío de formulario
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nombre = document.getElementById("name").value.trim();
        const mensaje = document.getElementById("mens").value.trim();

        if (!nombre || !mensaje) return;

        const { error } = await supabaseClient.from('comentarios').insert([
        { nombre, mensaje }
        ]);

        if (error) {
        alert("Error al comentar: " + error.message);
        return;
        }

        form.reset();
        cargarComentarios();
    });

    // Cargar al iniciar
    cargarComentarios();
});



