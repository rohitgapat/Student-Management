document.addEventListener("DOMContentLoaded", () => {
    const mode = document.body.dataset.mode;

    if (!mode) return;

    document.querySelectorAll(".action-col").forEach(col => {
        col.style.display = "table-cell";
    });

    if (mode === "update") {
        document.querySelectorAll(".delete").forEach(d => d.style.display = "none");
    }

    if (mode === "delete") {
        document.querySelectorAll(".edit").forEach(e => e.style.display = "none");
    }
});
